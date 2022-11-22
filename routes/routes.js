const express = require("express");
const router = express.Router()
const { login, signup, getusers } = require("../controllers/controllers")


router.get("/", getusers)

router.post("/signup", signup)

router.post("/login", login)

module.exports = router;