const express = require('express')
const router = express.Router()
// const verifyToken = require('../Controllers/verifyToken')

router.post("/:_id", authController.getQue);

router.post("/add", authController.addQue)

router.put("/:_id", authController.updateQue)

router.delete("/:_id", verifyToken, delQue)

module.exports = router
