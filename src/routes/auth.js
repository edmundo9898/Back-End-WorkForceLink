import express from "express";
import { register, login } from "../controllers/authController.js";
import validateSchema from "../middlewares/validateSchema.js";
import { loginSchema } from "../schemas/loginSchema.js";
import { registerSchema } from "../schemas/registerSchema.js";
const authRouter = express.Router();

authRouter.post("/register", validateSchema(registerSchema), register);

authRouter.post("/login", validateSchema(loginSchema), login);

export default authRouter;
