const express = require("express");
const router = express.Router();
const UserController = require("../App/controllers/UserController");
router.get("/", UserController.getAllUsers);
// router.delete("/:id", AreaController.deleteArea);
router.post("/create", UserController.createUser);
// router.put("/:id", AreaController.updateArea);
// router.get("/:area_slug", AreaController.showArea);

module.exports = router;
