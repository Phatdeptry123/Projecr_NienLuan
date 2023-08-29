const Tour = require("../models/Tour.js");
const { mongooseToOpject } = require("../../util/mongoose.js");
const { mutipleMongooseToOpject } = require("../../util/mongoose");

class TourController {
  async deleteTour(req, res, next) {
    try {
      const records = await Tour.deleteOne({ _id: req.params.id });
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async findAll(req, res, next) {
    try {
      const records = await Tour.find();
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async showTour(req, res, next) {
    try {
      const records = await Tour.findOne({ slug: req.params.slug });
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }

  async createTour(req, res, next) {
    try {
      // req.body.tour_image = `https://codefresher.vn/wp-content/uploads/2021/06/Banner-05-KH-IT-Foundation-1024x1024.png`;
      const tour = new Tour(req.body);
      const records = await tour.save();
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async updateTour(req, res, next) {
    try {
      const records = await Tour.updateOne({ _id: req.params.id }, req.body);
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
module.exports = new TourController();
