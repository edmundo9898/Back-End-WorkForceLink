import express from "express";
import TokenValited from "../middlewares/authMiddlewares.js";
import { getUserDetails } from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.get("/me", TokenValited, getUserDetails);

export default userRouter;
