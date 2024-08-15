import jwt from "jsonwebtoken";

async function TokenValited(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Acesso Negado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    console.log("req user decodificado", req.user);

    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ message: "Invalid Token" });
  }
}

export default TokenValited;
