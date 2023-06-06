const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8000

const dbConnect = require("./config/Database");
dbConnect();

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const blogRoutes = require("./routes/blog.js")

//mount the todo api routes
app.use("/api/v1", blogRoutes);

//default Route
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE baby</h1>`);
})

app.listen(PORT,()=>{
    console.log(`App listening on port Number : ${PORT}`)
})