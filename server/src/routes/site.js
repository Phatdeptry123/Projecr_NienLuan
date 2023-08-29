const express = require("express");
const router = express.Router();
const siteControler = require("../App/controllers/SiteController");
const TourController = require("../App/controllers/TourController.js");
router.use("/", TourController.findAll);
module.exports = router;
