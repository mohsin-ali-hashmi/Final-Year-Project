const mongoose = require("mongoose")
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const ngoSchema = new mongoose.Schema({
    ngoname: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    registration: {
        type: Number,
        required: true,
    },
    encry_password: {
        type: String,
        required: true
    },
    resetLink: {
        data: String,
        default: ''
    },
    salt: String,
}, { timestamps: true })

ngoSchema.virtual("password")
    .set(function(password) {
        this._password = password
        this.salt = uuidv1()
        this.encry_password = this.securePassword(password)
    })
    .get(function() {
        return this._password
    })

ngoSchema.methods = {
    authenticate: function(plainpassword) {
        return this.securePassword(plainpassword) === this.encry_password
    },

    securePassword: function(plainpassword) {
        if (!plainpassword) return "";

        try {
            return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex")
        } catch (err) {
            return ""
        }
    }
}

module.exports = mongoose.model("Ngo", ngoSchema)