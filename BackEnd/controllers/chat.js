const User = require("../models/User");
const Chat = require("../models/Chat");
const Message = require("../models/Message");

exports.chatById = (req, res, next, id) => {
    Chat.findById(id)
        .exec((err, chat) => {
            if (err || !chat) {
                return res.status(400).json({
                    error: "Chat not found"
                });
            }
            req.chat = chat;
            next();
        });
};

exports.getUserChat = (req, res) => {
    Chat.find({ $or: [{ ngo: req.profile }, { user: req.profile }] }, (err, chat) => {
        if (err) {
            return res.json({ error: "error finding chats" })
        } else {
            return res.json(chat)
        }
    }).populate('ngo', 'name').populate('user', 'name')
}

exports.getMessage = (req, res) => {

    Message.find({ chat_id: req.chat }, (err, chat) => {
        if (err) {
            return res.json({ error: "error finding messages" })
        } else {
            return res.json(chat)
        }
    }).populate('user_id', 'name')

}