const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.idNumber = !isEmpty(data.idNumber) ? data.idNumber : "";
  data.employmentNumber = !isEmpty(data.employmentNumber) ? data.employmentNumber : "";
  data.surname = !isEmpty(data.surname) ? data.surname : "";
  data.otherNames = !isEmpty(data.otherNames) ? data.otherNames : "";
  data.region = !isEmpty(data.region) ? data.region : "";
  data.department = !isEmpty(data.department) ? data.department : "";

  if (Validator.isEmpty(data.idNumber)) {
    errors.idNumber = "ID is required";
  }

  if (Validator.isEmpty(data.employmentNumber)) {
    errors.employmentNumber = "Employment Number field is required";
  } 
  if (Validator.isEmpty(data.surname)) {
    errors.surname = "Surname field is required";
  } 
  if (Validator.isEmpty(data.otherNames)) {
    errors.otherNames = "Enter othernames";
  } 
  if (Validator.isEmpty(data.region)) {
    errors.region = "Region field is required";
  } 
  if (Validator.isEmpty(data.department)) {
    errors.department = "department field is required";
  } 
 

 

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
