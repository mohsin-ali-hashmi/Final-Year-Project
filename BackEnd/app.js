// const mongoose = require("mongoose")
// const express = require("express")
    //const multer = require("multer")
// const app = express()
// const http = require("http").Server(app)
// const path = require('path')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();

const mongoose = require("mongoose")
const express = require("express")
const http = require("http");
const app = express()
    // const server = require("./server")
    // const http = require("http").Server(app)
// const path = require('path')
    // const socketio = require(
    //     'socket.io'
    // )

// chat code
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
io.on("connection", socket => {
    socket.emit("your id", socket.id);
    socket.on("send message", body => {
        io.emit("message", body)
    })
})

//end here

// DB Connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED")
}).catch(() => {
    console.log("UNABLE to connect to DB")
})

// Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
app.use('/uploads', express.static('uploads'))

// Import the routes
const ngoRoutes = require("./routes/ngo")
const userRoutes = require("./routes/user")
const donateRoutes = require("./routes/donate")

const chatRoutes = require("./routes/chat");
const notificationsRoutes = require("./routes/notification");



// Using routes
app.use('/api', userRoutes)
app.use('/api', ngoRoutes)
app.use('/api', donateRoutes)

app.use('/api', chatRoutes);
app.use('/api', notificationsRoutes);




const port = process.env.PORT || 5000

// Starting a server
// app.listen(port, () => {
//     console.log(`App is running at ${port}`)
// })

//exporting for usage in sockets.js
exports.http = http
require("./controllers/socket")

app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            errors: [{ msg: "Unauthorized Request" }],
        });
    }
});

server.listen(port, () => {
console.log("Running on Port: " + port);
});