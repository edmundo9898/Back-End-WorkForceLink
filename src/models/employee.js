import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import User from "./User.js"; // Certifique-se de importar o modelo User

const Employee = sequelize.define("Employee", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  managerId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: "id",
    },
    allowNull: false,
  },
});

// Configuração das associações
User.hasMany(Employee, { foreignKey: "managerId" });
Employee.belongsTo(User, { foreignKey: "managerId" });

export default Employee;
