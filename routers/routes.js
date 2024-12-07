const express = require("express");
const router = express.Router();

const {
  postUsers,
  getAllUser,
  updateUser,
  getActiveUsers,
  deleteSingleUser,
} = require("../controller/UserController");

const {
  postCarInsurance,
  getAllCarInsurance,
  getActiveCarInsurance,
  updateCarInsurance,
  deleteCarInsurance,
} = require("../controller/CarInsuranceController");

// User
router.post("/createUser", postUsers);
router.get("/getAllUser", getAllUser);
router.get("/getActiveUser", getActiveUsers);
router.patch("/user/:id", updateUser);
router.delete("/deleteUser/:id", deleteSingleUser);

// Car Insurance
router.post("/createInsurance", postCarInsurance); // Add a new car insurance entry
router.get("/getAllInsurance", getAllCarInsurance); // Retrieve all car insurance entries
router.get("/getActiveInsurance", getActiveCarInsurance); // Retrieve active car insurance entries
router.patch("/insurance/:id", updateCarInsurance); // Update a specific car insurance entry
router.delete("/deleteInsurance/:id", deleteCarInsurance);

module.exports = router;
