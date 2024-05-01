let mongoose = require("mongoose");
let con = mongoose.connect(
  "mongodb+srv://elearninfotech1:Pi52k9Y5ouquKQGq@mern11amapril.dthoqx2.mongodb.net/?retryWrites=true&w=majority&appName=mern11amapril"
);
if (con) {
  console.log("connected");
} else {
  console.log("not conne");
}
