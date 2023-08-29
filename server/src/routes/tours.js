const express = require("express");
const router = express.Router();
const TourController = require("../App/controllers/TourController.js");

router.post("/create", TourController.createTour);
router.get("/find-all", TourController.findAll);
router.get("/:tour_slug", TourController.showTour);
router.put("/:id", TourController.updateTour);
router.delete("/:id", TourController.deleteTour);
router.get("/", TourController.findAll);

// router.get("/", newsController.index);
module.exports = router;
