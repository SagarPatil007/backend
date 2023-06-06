// import the model
const Blog = require("../models/blog")

exports.createBlog = async(req,res)=>{
    try{
        const {title,description} = req.body;

        const blog = await Blog.create({title,description});

        res.status(200).json(
            {
                success:true,
                data:blog,
                message:"Entry created Successfully"
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}