const mongoose = require('mongoose');

// const notificationSchema = mongoose.model("Notification", new mongoose.Schema({
const notificationSchema = new mongoose.Schema({
    username: {
        type: String
    },
    isNotified: {
        type: Boolean,
        default: false

    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});
module.exports = mongoose.model("Notification", notificationSchema)
    // const Notification = mongoose.model('Notification', new mongoose.Schema({
    //     title: {
    //         type: String,
    //         required: [true, 'Plz provide Notification title'],
    //     },
    //     description: {
    //         type: String,
    //         required: [true, 'Plz provide Notification description'],
    //     },
    //     createdAt: {
    //         type: Date,
    //         default: Date.now,
    //     },
    //     recipient: {
    //         type: mongoose.Schema.ObjectId,
    //         ref: 'ngo',
    //     },
    // }));
    // module.exports = Notification;