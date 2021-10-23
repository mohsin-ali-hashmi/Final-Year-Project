const express = require("express")
const router = express.Router()

const Notification = require('../models/Notification')

router.get("/notification", (async(req, res) => {
    const notifications = await Notification.find();


    //  const temp = {
    //             id: 12345,
    //              isNotified: false,
    //              userName: 'Mohsin hashmi',
    //             };
    if (!notifications) return res.status(404).send("There is no notification");
    
    res.send(notifications);
}));

router.delete("/deleteAllNotification", (async(req, res) => {
    const notification = await Notification.deleteMany();
     return res.json({
                message: "Deleted Successfully",
                
            })
}));
module.exports = router