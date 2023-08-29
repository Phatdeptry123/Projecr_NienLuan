const express = require("express");
const router = express.Router();
const LoginController = require("../App/controllers/LoginCotroller");

router.post("/login", LoginController.signin);

// router.get("/", newsController.index);
module.exports = router;
