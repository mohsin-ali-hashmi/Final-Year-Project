const express = require("express")
const {
    ngosignup,
    activateAccount,
    forgotPassword,
    resetPassword,
    viewlist,
    ngosignin,
    ngosignout
} = require("../controllers/ngo.js")

const { check } = require('express-validator')
const router = express.Router()

router.post('/ngosignup', [
    check("ngoname", "Name atleast should be 3 characters").isLength({ min: 3 }),
    check("email", "Email should be valid").isEmail(),
    check("registration", "Registration number should be valid").isLength(),
    check("password", "Password at least should be 6 characters").isLength({ min: 6 }),
], ngosignup)
// router.post('/activate', activateAccount)
router.get('/activate/:token', activateAccount)
router.put('/forgotPassword', forgotPassword)
router.put('/resetPassword', resetPassword)


router.get('/ngolist', viewlist)
    //router.get('/view-list', viewList)

router.post('/ngosignin', ngosignin)
router.get("/ngosignout", ngosignout)


module.exports = router