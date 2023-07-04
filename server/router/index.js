const express = require('express');
const router = express.Router();
const todoController = require("./todo")
const authController = require("./auth")

router.use("/todo",todoController)
router.use("/auth",authController)

module.exports = router;