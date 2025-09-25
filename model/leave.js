import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({
  employee: { type: String, required: true }, // store as string
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" }
});



const Leave = mongoose.model("Leave", leaveSchema);
export default Leave;