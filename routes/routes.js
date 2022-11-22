const express = require("express");
const router = express.Router()
const { login, signup, getusers } = require("../controllers/controllers");
const {validate} = require("../middleware/validate");


router.get("/", getusers)

router.post("/signup",validate, signup)

router.post("/login", login)

module.exports = router;