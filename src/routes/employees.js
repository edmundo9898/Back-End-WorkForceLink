import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
} from "../controllers/employeesController.js";

import TokenValited from "../middlewares/authMiddlewares.js";

const employeesRouter = express.Router();

employeesRouter.post("/", TokenValited, createEmployee);

employeesRouter.get("/", TokenValited, getEmployees);

employeesRouter.get("/:id", TokenValited, getEmployeeById);

employeesRouter.put("/:id", TokenValited, updateEmployee);

employeesRouter.delete("/:id", TokenValited, deleteEmployee);

export default employeesRouter;
