const mongoose = require('mongoose')

require('dotenv').config()

exports.dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(()=>{console.log("Db connected Successfully")})
    .catch((err)=>{
        console.log("Db connection issue");
        console.error(err);
        process.exit(1);
    })
}