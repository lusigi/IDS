const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");

const Staff = require("../../Models/Staff");

router.post("/addstaff", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

  Staff.findOne({ idNumber: req.body.IdNumber }).then((staff) => {
    if (staff) {
      res
        .status(400)
        .json({ idNumber: "This ID has already been registered " });
    } else {
      const newStaff = new Staff({
        idNumber: req.body.idNumber,
        employmentNumber: req.body.employmentNumber,
        surname: req.body.surname,
        otherNames: req.body.otherNames,
        region: req.body.region,
        department: req.body.department,
      });

      newStaff
        .save()
        .then((staff) => {
          res.status(200).json(staff);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

router.get("/allstaff", (req, res) => {
  Staff.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

router.post("/individual", (req, res) => {
  // const idNumber = req.body.idNumber
  Staff.findOne({ idNumber: req.body.idNumber })
    .then((user) => {
      if (user) {
        res.json(user);
        console.log(user);
      } else {
        res.json({ idNumber: "Staff does not exist" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
