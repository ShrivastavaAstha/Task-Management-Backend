const express = require("express");
const app = express();
const taskmodel = require("./models/task");
const { connectDatabase } = require("./connection/connect");
app.use(express.json());

app.post("/api/addtask", async (req, res) => {
  try {
    const newobj = {
      TaskTitle: req.body.taskTitle,
      TaskDescription: req.body.taskdescription,
      TaskDueDate: req.body.taskduedate,
      TaskStatus: req.body.TaskStatus,
    };
    console.log(newobj);
    const taskdata = new taskmodel(newobj);
    await taskdata.save();
    return res.status(200).json({ success: true, message: "Data Saved" });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.get("/api/gettask", async (req, res) => {
  try {
    const task = await taskmodel.find();
    return res.status(200).json({ success: true, task: task });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
connectDatabase();
const PORT = 4000;
app.listen(PORT, async () => {
  await console.log(`Server is running at Port ${PORT}`);
});
