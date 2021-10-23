const mongoose = require("mongoose")
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const donateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        minlength: 2,
        trim: true
    },
    address: {
        type: String,
        maxlength: 40,
        minlength: 2,
        trim: true,
        required: true,
    },
    donationType: {
        type: String,
        
        minlength: 2
        // required: true
    },
    email: {
        type: String,
    },
    avatars: {
        type: String,
        //required: true
    },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User'
    // }
   

}, { timestamps: true })


// donateSchema.pre(/^find/, function(next) {

//      this.populate({
//          path: 'user',
//      })
//     next()
// })


module.exports = mongoose.model("Donate", donateSchema)