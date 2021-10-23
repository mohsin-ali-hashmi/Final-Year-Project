const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})
const upload = multer({
    storage: storage,
    filefilter: function(req, file, callback) {
        if (
            file.mimetype == "image/png" ||
            file.mimetype == "image/jpg"
        ) {
            callback(null, true)
        } else {
            console.log('only png & jpg file supported!')
            callback(null, false)
        }
    },
    limits: {
        fileSize: 1000000
    }
})
module.exports = upload