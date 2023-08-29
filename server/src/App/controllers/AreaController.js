const Area = require("../models/area.js");
const { mongooseToOpject } = require("../../util/mongoose.js");
const { mutipleMongooseToOpject } = require("../../util/mongoose");
class AreaController {
  async findAll(req, res, next) {
    try {
      const records = await Area.find();
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async deleteArea(req, res, next) {
    try {
      const records = await Area.deleteOne({ _id: req.params.id });
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async createArea(req, res, next) {
    try {
      // req.body.tour_image = `https://codefresher.vn/wp-content/uploads/2021/06/Banner-05-KH-IT-Foundation-1024x1024.png`;
      const area = new Area(req.body);
      const records = await area.save();
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async updateArea(req, res, next) {
    try {
      const records = await Area.updateOne({ _id: req.params.id }, req.body);
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
  async showArea(req, res, next) {
    try {
      const records = await Area.findOne({ area_slug: req.params.area_slug });
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}
module.exports = new AreaController();
