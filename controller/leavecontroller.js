
import Leave from "../model/leave.js"

const applyLeave = async (req, res) => {
  try {
    const { employee_id, start_date, end_date, reason } = req.body;
    const leave = new Leave({
      employee: employee_id,
      start_date,
      end_date,
      reason
    });
    await leave.save();
    res.redirect("/leaves/list");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const showLeaves = async (req, res) => {
  try {
    const leaves = await Leave.find().populate("employee", "name email");
    res.json(leaves);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export default {applyLeave,showLeaves };