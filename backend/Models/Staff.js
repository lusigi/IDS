const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Staff = new Schema({
  idNumber: {
    type: String,
    required: true,
  },
  employmentNumber: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  otherNames: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
 
});

module.exports = mongoose.model("Staff", Staff);
