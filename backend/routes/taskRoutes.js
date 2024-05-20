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
const router = express.Router();

router.get("/", getTasks); // get all tasks
router.get("/:id", getTask); // get a single task
router.post("/", createTask); // create a new task
router.put("/:id", updateTask); // update a task
router.delete("/:id", deleteTask); // delete a task
router.get("/withoutOwner", getTasksWithoutOwner); // get tasks without owner
router.put("/assignOwner/:id", assignOwner); // assign owner to a task

module.exports = router;
