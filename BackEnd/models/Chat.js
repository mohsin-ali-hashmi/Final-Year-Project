// const moongose = require("mongoose");
// const Schema = moongose.Schema;

// const chatSchema = new Schema({
//     ngo: {
//         type: moongose.Schema.ObjectId,
//         ref: "ngo"
//     },
//     user: {
//         type: moongose.Schema.ObjectId,
//         ref: "user"
//     },
//     chat_type: {
//         type: String,
//         default: "single"
//     }


// });

// let Chat = moongose.model("Chat", chatSchema);

// module.exports = Chat;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    ngo: {
        type: mongoose.Schema.ObjectId,
        ref: 'Ngo',
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    chat_type: {
        type: String,
        default: 'single',
    },
    messages: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Message',
    }, ],
});

chatSchema.pre(/^find/, function(next) {
    this.populate({
        path: 'messages',
    });
    next();
});

let Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;