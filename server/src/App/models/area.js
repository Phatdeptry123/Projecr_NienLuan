const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// const slug = require("mongoose-slug-generator");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const Area = new Schema({
  area: { type: String, maxLengh: 255 },
  area_slug: { type: String, slug: "area", unique: true },
});

module.exports = mongoose.model("Area", Area);
