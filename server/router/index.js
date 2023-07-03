const express = require('express');
const router = express.Router();
const todoController = require("./todo")

router.use("/todo",todoController)

module.exports = router;