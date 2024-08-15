import Employee from "../models/employee.js";
/* import Position from "../models/position.js"; */

export const createEmployee = async (req, res) => {
  const { name, email, phone, position} = req.body;

  const { userId } = req.user;

  try {
    const employee = await Employee.create({
      name,
      email,
      phone,
      position,
      

      managerId: userId,
    });
    res.status(201).json(employee);
  } catch (error) {
    console.error("Error ao criar o funcionario:", error);
    res.status(500).json({ message: "Error ao criar o funcinario" });
  }
};

export const getEmployees = async (req, res) => {
  const { userId } = req.user;

  try {
    const employees = await Employee.findAll({
      where: { managerId: userId },
    });
    res.json(employees);
  } catch (error) {
    console.error("Erro ao buscar os funcionarios", error);
    res.status(500).json({ message: "Error ao buscar os funcionarios" });
  }
};

export const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  try {
    const employee = await Employee.findOne({
      where: { id, managerId: userId },
    });

    /* const position = await Position.findOne({
      where: { employeeId: id },
      order: [['hireDate', 'DESC']], // Ordenação decrescente por hireDate
    }); */

    if (!employee) {
      return res.status(404).json({ message: "Funcionario não encontrado." });
    }

    res.json(employee);
  } catch (error) {
    console.error("Erro ao buscar os funcionarios", error);
    res.status(500).json({ message: "Error ao buscar os funcionarios" });
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, position } = req.body;
  const { userId } = req.user;

  try {
    const employee = await Employee.findOne({
      where: { id, managerId: userId },
    });

    if (!employee) {
      return res.status(404).json({ message: "Funcionário não encontrado" });
    }

    await employee.update({ name, email, phone, position });
    res.json(employee);
  } catch (error) {
    console.error("Erro ao atualizar funcionário:", error);
    res.status(500).json({ message: "Erro ao atualizar funcionário" });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  try {
    const employee = await Employee.findOne({
      where: { id, managerId: userId },
    });

    if (!employee) {
      return res.status(404).json({ message: "Funcionário não encontrado" });
    }

    await employee.destroy();
    res.json({ message: "Funcionario deletado com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar funcionário:", error);
    res.status(500).json({ message: "Erro ao deletar funcionário" });
  }
};
