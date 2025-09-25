import Employee from "../model/employee.js"

const addEmployee = async (req, res) => {
  try {
    const { name, email } = req.body;
    const emp = new Employee({ name, email });
    await emp.save();
    res.send("Employee added successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export default {getEmployees,addEmployee};