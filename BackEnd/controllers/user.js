const User = require("../models/User.js")
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const mailgun = require("mailgun-js")
const DOMAIN = 'sandboxff3bd13ec83f44d79e2e8cd05f894982.mailgun.org';
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN })

// exports.usersignup = async(req, res) => {
//     const errors = validationResult(req)

//     if (!errors.isEmpty()) {
//         return res.status(400).json({
//             error: errors.array()[0].msg
//         })
//     }

//     const user = await new User(req.body)
//     console.log(user)
//     user.save((err, user) => {
//         if (err) {
//             return res.status(400).json({
//                 error: "User Already Exist"
//             })
//         }

//         return res.json({
//             message: "Success",
//             user
//         })
//     })
// }

exports.usersignup = (req, res) => {
    const errors = validationResult(req.body)
    const { username, email, password } = req.body;
    User.findOne({ email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: "Already exist "
            });
        }
        const token = jwt.sign({ username, email, password }, process.env.JWT_ACC_ACTIVATE, {
            expiresIn: '20m'
        });

        const data = {
            from: 'Charitable@gmail.com',
            to: email,
            subject: 'Account Activation Link',
            html: ` Please click on given link to activate <p> ${process.env.CLIENT_URL}/api/user-activate/${token}</p>`
        };
        mg.messages().send(data, function(err, body) {
            if (err) {
                return res.json({
                    error: err.message
                })
            }
            return res.json({ message: 'Email has been sent,kindly activate your account' });
        });


    });
}
exports.activateAccount = (req, res) => {
    token = req.params.token;
    if (token) {
        jwt.verify(token, process.env.JWT_ACC_ACTIVATE, function(err, decodedToken) {
            if (err) {
                return res.status(400).json({ error: 'incorrect or expired link.' })
            }
            const { username, email, password } = decodedToken;
            User.findOne({ email }).exec((err, user) => {
                if (user) {
                    return res.status(400).json({ error: "User already exists" });
                }
                let newUser = new User({ username, email, password });
                newUser.save((err, success) => {
                    if (err) {
                        console.log("Error in signup:", err);
                        return res.status(400).json({ error: "Error Activating account" })
                    }
                    console.log("Signup user success");
                    return res.redirect("http://localhost:3000/Mainforms");
                })
            });
        })
    } else {
        return res.status(400).json({ error: "something went wrong!!!" })
    }
}







exports.usersignin = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User doesn't exist" });
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: "Email and password do not match"
            })
        }
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET);
        res.cookie('token', token, { expire: new Date() + 1 })

        res.send({message:"Login Successfull", user: user})
        try{
            res.status(200).json({ user: user, token: token });
        }catch(er){
            console.log("Warning:Status code dependency")
        }
    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
};


exports.usersignout = (req, res) => {
    res.clearCookie("token")
    return res.json({
        message: "user siginout successful"
    });
}


exports.forgotPassword = (req, res) => {
    const { email } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: "User with this email does not exists" });
        }
        const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, {
            expiresIn: '20m'
        });
        const data = {
            from: 'noreply@gmail.com',
            to: email,
            subject: 'Reset password Link',
            html: `< h2 > pPlease click on given link to reset your password < /h2><p> ${process.env.CLIENT_URL}/resetpassword/${token}(</p>`
        };
        return user.updateOne({ resetLink: token }, function(err, success) {
            if (err) {
                return res.status(400).json({ error: "reset password link error" });
            } else {
                mg.messages().send(data, function(err, body) {
                    if (err) {
                        return res.json({
                            error: err.message
                        })
                    }
                    return res.json({ message: 'Email has been sent,kindly follow instructions' });
                });
            }
        })
    })
}

exports.resetPassword = (req, res) => {
    const { resetLink, newPass } = req.body;
    if (resetLink) {
        jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY, function(error, decodedData) {
            if (error) {
                return res.status(401).json({
                    error: "Incorrect token or expired."
                })
            }
            User.findOne({ resetLink }, (err, user) => {
                if (err || !user) {
                    return res.status(400).json({ error: "User with this token does not exists." });
                }
                const obj = {
                    password: newPass,
                    resetLink: ''
                }
                user = _.extend(user, obj);
                user.save((err, result) => {
                    if (err) {
                        return res.status(400).json({ error: "reset password error" });
                    } else {

                        return res.status(200).json({ message: 'Your password has been changed' });
                    }
                })
            })
        })
    } else {
        return res.status(401).json({ error: "Authentication error!!" });
    }
}