/* import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Employee from "./employee.js";

const Position = sequelize.define("Position", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  positionInfo: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  sector: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  hireDate: {
    type: Date,
    requerid: true,
  },
  employeeId: {
    type: DataTypes.UUID,
    references: {
      model: Employee,
      key: "id",
    },
    allowNull: false, 
  },
});

// Configuração das associações
Employee.hasMany(Position, { foreignKey: "employeeId" });
Position.belongsTo(Employee, { foreignKey: "employeeId" });

export default Position;
 */