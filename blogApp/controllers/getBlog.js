const Blog = require("../models/blog")

exports.getBlog = async(req,res)=>{
    try{
        const blog = await Blog.find({});
        
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

exports.getBlogById = async(req,res)=>{
    try{
        const {id} = req.params;

        const blog = await Blog.findOne({_id:id});

        if(!blog){
            res.status(404).json(
                {
                    success:false,
                    message:"data not found"
                }
            )
        }
        
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