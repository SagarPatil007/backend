const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:500,
        },
        like:{
            type:Number,
            default:0,
            required:true,
        },
        dislike:{
            type:Number,
            default:0,
            required:true,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
)

module.exports = mongoose.model("blog", blogSchema);