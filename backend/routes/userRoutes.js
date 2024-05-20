const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserCountByRole,
} = require("../controllers/userController");
const { auth } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/count", auth, getUserCountByRole); // get user count by role
router.get("/", auth, getUsers); // get all users
router.get("/:id", auth, getUser); // get a single user
router.post("/", auth, createUser); // create a new user
router.put("/:id", auth, updateUser); // update a user
router.delete("/:id", auth, deleteUser); // delete a user

module.exports = router;
