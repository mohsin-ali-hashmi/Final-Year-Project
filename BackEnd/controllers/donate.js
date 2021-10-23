const Donate = require("../models/Donate")
const Notification = require("../models/Notification")
const multer = require("multer")
const { validationResult } = require('express-validator')

//check the error


exports.donate = (req, res) => {
    const errors = validationResult(req)
    const donate = new Donate(req.body)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }
    if (req.files) {
        let path = ''
        req.files.forEach(function(files, index, arr) {
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        donate.avatars = path
    }


    // console.log(donate)

    donate.save((err, donate) => {

        if (err) {
            console.log(err)
            return res.status(400).json({
                error: "unable to donate"
                
               
            })
        } else {
                 const notification = new Notification({
                 isNotified: false,
                 username: req.body.name,
                });
                notification.save();
            
            return res.json({
                message: "Success",
                
                donate
                
            })
        }
    })
}

exports.donateCard = async(req, res) => {

    try{
        const donate = await Donate.find(req.body)
        res.json(donate)
    }catch(err){
        res.send('Error'+ err)
    }


    // const errors = validationResult(req)
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({
    //         error: errors.array()[0].msg
    //     })
    // }
    // const cardData = await Donate.findAll()
    // Donate.find((err, data) => {
    //     req.body
    // })
    // return res.json({
    //     message: "Success",
    //     donate
    // })
}


exports.updateCard = (req, res,next)=>{

    console.log(req.params.id)
    Donate.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
            console.log(req.body)

            if (err) {
                res.status(500);
                res.end("Failed to Update");
            }

            if (!todo) {
                res.status(404)
                res.end("Data does not exist")
            }

            else {
                res.status(200);
                res.json(todo);
            }

        })


    }