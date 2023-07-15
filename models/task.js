const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  TaskTitle: String,
  TaskDescription: String,
  TaskDueDate: String,
  TaskStatus: String,
});

const taskmodel = mongoose.model("Task_info", taskSchema);
module.exports = taskmodel;
