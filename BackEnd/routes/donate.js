const express = require("express")
const { donate, donateCard, updateCard } = require("../controllers/donate.js")
const { check } = require('express-validator')
const router = express.Router()
const upload = require("../middleware/upload")
const protect = require("../middleware/protect")


//router.use(protect)

router.post('/donate', [upload.array('avatars[]'),
    check("name", "Name atleast should be 3 characters").isLength(),
    check("address", "Enter valid address").isLength(),
    check("donationType", "Donation type should be Food,Money,Clothes or Footwear").isLength()

], donate)
router.get('/donate', donateCard)

router.put('/updatedonation/:id', updateCard)


module.exports = router