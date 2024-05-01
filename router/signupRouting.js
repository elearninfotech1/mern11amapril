let express = require("express");
require("../db");
let Signup = require("../modal/signupmodal");
let signupRouting = express.Router();

signupRouting.post("/signup", async (req, res) => {
  const { name, email, password, cpassword, phone, address } = req.body;
  let exists = await Signup.findOne({ email: email });
  if (exists) {
    res.send(`<h1>User already Existed</h1>`);
  } else if (password != cpassword) {
    res.send(`<h1>Invalid Credientials</h1>`);
  } else {
    let result = new Signup(req.body);
    let info = await result.save();
    res.send(info);
  }
});

signupRouting.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let exists = await Signup.findOne({ email: email });
  if (!exists) {
    res.send(`<h1>User Not Found</h1>`);
  }
  if (exists.password == password) {
    res.send("Valid");
  } else {
    res.send("Invalid");
  }
});

module.exports = signupRouting;
