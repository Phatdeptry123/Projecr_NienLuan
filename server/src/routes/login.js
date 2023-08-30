const express = require("express");
const router = express.Router();
const LoginController = require("../App/controllers/LoginCotroller");

router.post("/", LoginController.signin);

// router.get("/", newsController.index);
module.exports = router;
