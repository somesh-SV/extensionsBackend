const mongoose = require("mongoose");

const carInsuranceSchema = new mongoose.Schema({
  insuredName2: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  addressOfInsured: {
    type: String,
    required: true,
  },
  colorOfCar: {
    type: String,
    required: true,
  },
  engineNumber: {
    type: String,
    required: true,
  },
  chasisNumber: {
    type: String,
    required: true,
  },
  cubicCapacity: {
    type: String,
    required: true,
  },
  invoiceValueString: {
    type: String,
    required: true,
  },
  panNumber: {
    type: String,
    required: true,
  },
  aadharNo: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("CarInsurance", carInsuranceSchema);
