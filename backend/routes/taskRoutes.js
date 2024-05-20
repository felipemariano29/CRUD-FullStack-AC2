const express = require("express");
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  getTasksWithoutOwner,
  assignOwner,
} = require("../controllers/taskController");
const { auth } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/withoutOwner", auth, getTasksWithoutOwner); // get tasks without owner
router.get("/", auth, getTasks); // get all tasks
router.get("/:id", auth, getTask); // get a single task
router.post("/", auth, createTask); // create a new task
router.put("/:id", auth, updateTask); // update a task
router.delete("/:id", auth, deleteTask); // delete a task
router.put("/assignOwner/:id", auth, assignOwner); // assign owner to a task

module.exports = router;
