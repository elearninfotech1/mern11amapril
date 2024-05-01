let express = require("express");
let student = require("./router/studentRouting");
let employee = require("./router/employeeRouting");
let signup = require("./router/signupRouting");
let cors = require("cors");
let app = express();

app.use(express.json());
app.use(cors());
app.use("/", student);
app.use("/", employee);
app.use("/", signup);

app.listen(4000);
