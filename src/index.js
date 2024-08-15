import express from "express";
import authRouter from "./routes/auth.js";
import sequelize from "./db.js";
import employeesRouter from "./routes/employees.js";
import userRouter from "./routes/users.js";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());

// Outros middlewares
app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/employees", employeesRouter);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco de dados com sucesso.");

    await sequelize
    .sync({ force: true })
    .then(() => console.log("Tabelas sincronizadas."))
    .catch((error) => console.error("Erro ao sincronizar tabelas:", error));


    console.log(`Servidor rodando em http://localhost:${port}`);
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
});
