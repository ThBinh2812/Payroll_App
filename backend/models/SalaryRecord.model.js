import mongoose from "mongoose";

const daySchema = new mongoose.Schema({
  day: Number,
  hours: Number,
  salary: Number,
});

export default mongoose.model(
  "SalaryRecord",
  new mongoose.Schema({
    userId: String,
    month: String,
    hourlyRate: Number,
    days: [daySchema],
    totalSalary: Number,
  })
);
