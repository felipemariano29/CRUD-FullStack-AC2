const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "todo",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
