const Users = require("../Model/User");

exports.postUsers = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const user = new Users(data);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving user", details: err.message });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error retrieving users", details: err.message });
  }
};

exports.getActiveUsers = async (req, res) => {
  try {
    const user = await Users.find({ active: true });
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error retrieving users", details: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const user = await Users.updateOne({ _id: id }, { $set: updateData });
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error updating user", details: err.message });
  }
};

exports.deleteSingleUser = async (req, res) => {
  try {
    const result = await Users.findByIdAndRemove(req.params.id);
    res.json(result);
  } catch (err) {
    res.send("Error" + err);
  }
};
