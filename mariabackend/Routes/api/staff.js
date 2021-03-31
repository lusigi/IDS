const express = require("express");

const pool = require("../../helpers/database");

const router = express.Router();

router.get("/allstaff", (req, res) => {
  pool.getConnection().then((conn) => {
    conn.query("SELECT * FROM staff").then((rows) => {
      res.json(rows);
    });
  });
});

router.post("/addstaff", (req, res) => {
  pool.getConnection().then((conn) => {
    conn
      .query(
        "INSERT INTO staff(surname, otherNames,employmentNumber, region, department, idNumber)VALUES('NJOROGE', 'MAINA KEVIN', '33456', 'KISUMU', 'C&BC', '223456')"
      )
      .then((rows) => {
        res.json(rows);
      });
  });
});

module.exports = router;
