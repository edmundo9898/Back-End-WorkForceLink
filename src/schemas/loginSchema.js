import Joi from "joi";

export const loginSchema = Joi.object({
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
