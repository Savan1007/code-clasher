const express = require('express')
const router = express.Router()
const authController = require('../Controllers/auth')
const verifyToken = require('../Controllers/verifyToken')

router.post("/signup", authController.signUp);

router.post("/login", authController.login)

router.post("/logout", authController.logout)

router.post("/me", verifyToken, authController.me)

module.exports = router
