const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// const slug = require("mongoose-slug-generator");
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);

const Tour = new Schema(
  {
    tour_name: { type: String, maxLengh: 255 },
    tour_description: { type: String, maxLengh: 20000 },
    tour_image: { type: String, maxLengh: 510 },
    area: { type: String, maxLengh: 510 },
    tour_slug: { type: String, slug: "tour_name", unique: true },
    // tour_price: {type:}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tour", Tour);
