const User = require("../models/User");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    user = new User({ name, email, password, role });
    await user.save();

    res
      .status(201)
      .json({ success: true, message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: `${error}` });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, password, role } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { name, email, password, role },
      { new: true }
    );
    res
      .status(200)
      .json({ success: true, message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};

exports.getUserCountByRole = async (req, res) => {
  try {
    const roles = ["FE", "BE", "DATA", "LEAD"];
    const counts = await Promise.all(
      roles.map((role) => User.countDocuments({ role }))
    );

    const result = roles.reduce((acc, role, index) => {
      acc[role] = counts[index];
      return acc;
    }, {});

    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error}` });
  }
};
