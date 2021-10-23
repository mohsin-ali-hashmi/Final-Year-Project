const express = require("express")
const {
    usersignup,
    activateAccount,
    forgotPassword,
    resetPassword,
    usersignin,
    usersignout,
} = require("../controllers/user.js")
const { check } = require('express-validator')
const router = express.Router()

router.post('/usersignup', [
    check("username", "Name atleast should be 3 characters").isLength({ min: 3 }),
    check("email", "Email should be valid").isEmail(),
    check("password", "Password at least should be 6 characters").isLength({ min: 6 }),
], usersignup)


router.get('/user-activate/:token', activateAccount)
router.put('/forgot-password', forgotPassword)
router.put('/reset-password', resetPassword)


router.post('/usersignin', usersignin)
router.get("/usersignout", usersignout)

module.exports = router