const Tour = require("../models/Tour.js");
const { mutipleMongooseToOpject } = require("../../util/mongoose");
class SiteController {
  async index(req, res, next) {
    res.send("sadadssad");
  }
}
module.exports = new SiteController();
