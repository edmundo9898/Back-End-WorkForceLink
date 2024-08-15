import User from "../models/User.js";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

async function register(req, res) {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: "Email Already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Usuário criado com sucesso!!", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error ao criar o usuário" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Email  not found" });
    }
    const isPassowordValid = await bcrypt.compare(password, user.password);

    if (!isPassowordValid) {
      return res.status(401).json({
        message: "Senha Inválida",
      });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error ao fazer o login" });
  }
}

export { register, login };
