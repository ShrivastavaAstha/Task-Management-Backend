const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  TaskTitle: String,
  TaskDescription: String,
  TaskDueDate: String,
  TaskStatus: { type: String, enum: ["To-do", "On-going", "Completed"] },
});

const taskmodel = mongoose.model("Task_info", taskSchema);
module.exports = taskmodel;
