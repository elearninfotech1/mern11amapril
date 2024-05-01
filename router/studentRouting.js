let express = require("express");
require("../db");
let Student = require("../modal/studentmodal");
let studentRouting = express.Router();

studentRouting.get("/student", async (req, res) => {
  let stu = await Student.find();
  if (stu.length > 0) {
    res.send(stu);
  } else {
    res.send("no data found");
  }
});

studentRouting.post("/student", async (req, res) => {
  let stu = new Student(req.body);
  let result = await stu.save(); //2s
  res.send(result);
});

studentRouting.delete("/student/:id", async (req, res) => {
  const id1 = req.params.id;
  let stu = await Student.deleteOne({ _id: id1 });
  res.send(stu);
});

studentRouting.get("/student/:id", async (req, res) => {
  const id1 = req.params.id;
  let stu = await Student.findOne({ _id: id1 });
  res.send(stu);
});

studentRouting.put("/student/:id", async (req, res) => {
  const id1 = req.params.id;
  let stu = await Student.updateOne({ _id: id1 }, { $set: req.body });
  res.send(stu);
});

module.exports = studentRouting;
