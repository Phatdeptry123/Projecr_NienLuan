const mongoose = require("mongoose");
async function connect() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/DB_TOUR")
    .then(() => console.log("Connected! "));
}
module.exports = { connect };
