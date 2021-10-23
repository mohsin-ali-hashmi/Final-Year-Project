// const moongose = require("mongoose");
// const Schema = moongose.Schema;

// const messageSchema = new Schema({
//     chat_id: {
//         type: moongose.Schema.ObjectId,
//         ref: "chat"
//     },
//     ngo_id: {
//         type: moongose.Schema.ObjectId,
//         ref: "ngo"
//     },
//     user_id: {
//         type: moongose.Schema.ObjectId,
//         ref: "user"
//     },
//     message: {
//         type: String
//     }
// });

// let Chat = moongose.model("Message", messageSchema);

// module.exports = Chat;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
    },
    sentFrom: String,
});

let Chat = mongoose.model('Message', messageSchema);

module.exports = Chat;