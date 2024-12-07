const CarInsurance = require("../Model/CarInsurance");

// POST: Add a new car insurance entry
exports.postCarInsurance = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const insurance = new CarInsurance(data);
    const savedInsurance = await insurance.save();
    res.status(201).json(savedInsurance);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error saving insurance", details: err.message });
  }
};

// GET: Retrieve all car insurance entries
exports.getAllCarInsurance = async (req, res) => {
  try {
    const insurances = await CarInsurance.find();
    res.status(200).json(insurances);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error retrieving insurances", details: err.message });
  }
};

// GET: Retrieve active car insurance entries
exports.getActiveCarInsurance = async (req, res) => {
  try {
    const activeInsurances = await CarInsurance.find({ active: true });
    console.log(activeInsurances);
    res.status(200).json(activeInsurances);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Error retrieving active insurances",
      details: err.message,
    });
  }
};

// PATCH: Update a specific car insurance entry
exports.updateCarInsurance = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedInsurance = await CarInsurance.updateOne(
      { _id: id },
      { $set: updateData }
    );
    res.status(200).json(updatedInsurance);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error updating insurance", details: err.message });
  }
};

// DELETE: Remove a specific car insurance entry
exports.deleteCarInsurance = async (req, res) => {
  try {
    const result = await CarInsurance.findByIdAndRemove(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error deleting insurance", details: err.message });
  }
};
