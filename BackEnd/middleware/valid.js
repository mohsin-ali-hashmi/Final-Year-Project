// const { check } = require('express-validator');
// exports.forgotPasswordValidator = [
//     check('email')
//     .not()
//     .isEmpty()
//     .isEmail()
//     .withMessage('Must be a valid email address')
// ];

// exports.resetPasswordValidator = [
//     check('newPassword')
//     .not()
//     .isEmpty()
//     .isLength({ min: 6 })
//     .withMessage('Password must be at least  6 characters long')
// ];

// var nodemailer = require('nodemailer');
// var sgTransport = require('nodemailer-sendgrid-transport');
// require('dotenv').config()



// exports.sendEmail = emailData => {
//     var options = {
//         auth: {
//             api_key: process.env.SENDGRID_API_KEY
//         }
//     };

//     var client = nodemailer.createTransport(sgTransport(options));

//     client.sendMail(emailData, function(err, info) {
//         console.log(emailData);
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Message sent');

//         }
//     });



// };