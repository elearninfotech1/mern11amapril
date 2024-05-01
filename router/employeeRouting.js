let express = require("express");
require("../db");
let Employee = require("../modal/employeemodal");
let employeeRouting = express.Router();

employeeRouting.post("/employee", async (req, res) => {
  let emp = new Employee(req.body);
  let result = await emp.save(); //2s
  res.send(result);
});

module.exports = employeeRouting;
