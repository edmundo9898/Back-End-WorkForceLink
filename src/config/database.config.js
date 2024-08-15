import dotenv from "dotenv";
dotenv.config();




const config = {
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  dialect: "postgres",
  port: process.env.DATABASE_PORT || 5432,
};

export default config;
