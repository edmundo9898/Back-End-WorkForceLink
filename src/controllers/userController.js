import User from "../models/User.js";

export const getUserDetails = async (req, res) => {
  try {
    if (!req.user.userId) {
      return res.status(400).json({ message: "Usuário não autenticado" });
    }

    const userId = req.user.userId;
    const user = await User.findOne({
      where: { id: userId },
      attributes: ["id", "name", "email"],
    });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error no servidor");
  }
};
