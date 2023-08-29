const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// const slug = require("mongoose-slug-generator");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const User = new Schema(
  {
    username: {
      type: String,
      require: [true, "username is required"],
    },
    email: {
      type: String,
      trim: true,
      lowercas: true,
    },

    password: String,
    name: String,
    ban: Boolean,
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
