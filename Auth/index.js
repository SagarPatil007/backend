const express = require('express')
const app = express();
require('dotenv').config()

// connecting  the databse
require('./config/database').dbConnect();

const PORT = process.env.PORT || 4000

const cookieParser = require('cookie-parser')
app.use(cookieParser());

app.use(express.json());

// route import and mount
const user = require("./routes/user")

app.use("/api/v1",user);

app.listen(PORT,()=>{
    console.log("Sever Up succeesfully..")
})
