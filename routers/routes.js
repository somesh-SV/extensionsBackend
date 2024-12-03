const express = require("express");
const router = express.Router();

const {
  postUsers,
  getAllUser,
  updateUser,
  getActiveUsers,
  deleteSingleUser,
} = require("../controller/UserController");

// User
router.post("/createUser", postUsers);
router.get("/getAllUser", getAllUser);
router.get("/getActiveUser", getActiveUsers);
router.patch("/user/:id", updateUser);
router.delete("/deleteUser/:id", deleteSingleUser);

module.exports = router;
