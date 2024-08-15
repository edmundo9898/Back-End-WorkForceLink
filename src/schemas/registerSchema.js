import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(4).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters long",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "Email must be a string",
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.base": "Password must be a string",
    "string.empty": "Password is required",
    "string.min": "Password must be at least 6 characters long",
  }),
});
