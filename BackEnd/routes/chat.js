const express = require("express");
const router = express.Router();
const { chatById, getUserChat, getMessage, } = require("../controllers/chat");
const { user } = require("../controllers/user");
//const { requireSignin } = require("../controllers/user");
//const { requireSignin } = require("../controllers/ngo");

router.get("/Message", getMessage)
router.get("/chatById", chatById)
router.get("/getUserChats", getUserChat)

module.exports = router;