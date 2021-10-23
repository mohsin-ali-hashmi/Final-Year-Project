const Chat = require("../models/Chat");
const Message = require("../models/Message");
const User = require("../models/User");
const Ngo = require("../models/Ngo")
const { http } = require("../app.js")
const socket = require("socket.io")(http);


socket.on("chat message", function(msg) {
    console.log("message: " + msg);

    //broadcast message to everyone in port:5000 except yourself.
    socket.broadcast.emit(msg.user_id, { message: msg });

    //save chat to the database
    const ngo_id = '';
    const user_id = '';


    Ngo.findById(ngo_id, (err, ngo) => {
        if (err || !ngo) {
            console.log("ngo not found")
        } else {
            User.findById(user_id, (err, user) => {
                if (err || !user) {
                    console.log("user not found")
                } else {
                    Chat.findOne({ $or: [{ ngo: ngo, user: user }, { user: ngo, ngo: user }] }, (err, chat) => {
                        if (!chat) {
                            let chat = new Chat();
                            chat.ngo = ngo;
                            chat.user = user;
                            chat.save((err, chat) => {
                                if (err) {
                                    console.log("error creating chat")
                                } else {
                                    let message = new Message();
                                    message.chat_id = chat;
                                    message.ngo_id = ngo;
                                    message.user_id = user;
                                    message.message = msg
                                    message.save((err, message) => {
                                        if (err || !message) {
                                            console.log("error creating message")
                                        } else {
                                            console.log("message delivered")
                                        }
                                    })
                                }

                            })
                        } else {
                            let message = new Message();
                            message.chat_id = chat;
                            message.ngo_id = ngo;
                            message.user_id = user;
                            message.message = msg
                            message.save((err, message) => {
                                if (err || !message) {
                                    console.log("error creating message")
                                } else {
                                    console.log("message delivered")
                                }
                            })
                        }
                    })
                }
            }).select("ngoname, email _id")
        }
    }).select("username, email _id")

});