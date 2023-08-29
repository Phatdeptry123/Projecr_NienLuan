const express = require("express");
const router = express.Router();
const AreaController = require("../App/controllers/AreaController.js");
router.get("/", AreaController.findAll);
router.delete("/:id", AreaController.deleteArea);
router.post("/create", AreaController.createArea);
router.put("/:id", AreaController.updateArea);

module.exports = router;
