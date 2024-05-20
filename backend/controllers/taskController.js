const Task = require("../models/Task");
const User = require("../models/User");

exports.getTasks = async (req, res) => {
  try {
    const owner = req.user._id;
    const tasks = await Task.find({ owner });

    res
      .status(200)
      .json({ success: true, message: "Tasks fetched successfully", tasks });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

exports.getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    if (!task.owner.equals(req.user._id)) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized access" });
    }

    res
      .status(200)
      .json({ success: true, message: "Task fetched successfully", task });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();
    res
      .status(201)
      .json({ success: true, message: "Task created successfully", task });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    let task = await Task.findById(id);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    if (!task.owner.equals(req.user._id)) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    task = await Task.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, message: "Task updated successfully", task });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    if (!task.owner.equals(req.user._id)) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    await Task.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully", task });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

exports.getTasksWithoutOwner = async (req, res) => {
  try {
    const tasks = await Task.find({ owner: null });
    res
      .status(200)
      .json({ success: true, message: "Tasks fetched successfully", tasks });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

exports.assignOwner = async (req, res) => {
  try {
    const { id } = req.params;
    const { ownerEmail } = req.body;

    if (!ownerEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Owner is required" });
    }

    const owner = await User.findOne({ email: ownerEmail });

    if (!owner) {
      return res
        .status(404)
        .json({ success: false, message: "Owner not found" });
    }

    const task = await Task.findById(id);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    task.owner = owner;
    await task.save();
    res
      .status(200)
      .json({ success: true, message: "Owner assigned successfully", task });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};
