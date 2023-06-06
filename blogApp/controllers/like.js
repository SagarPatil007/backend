const Blog = require("../models/blog")

exports.likePost = async (req,res)=>{
    try{
        const {id} = req.params;

        const {like} = await Blog.findOne({_id:id});

        const blog = await Blog.findByIdAndUpdate(
            {_id:id},
            {like:like+1}
        )

        res.status(200).json({
            success:true,
            data:blog,
            message:`liked the post `,
        });
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
         success:false,
         error:err.message,
         message:"Server Error",
        }) 
    }
    
}

exports.dislikePost = async (req,res)=>{
    try{
        const {id} = req.params;

        const {dislike} = await Blog.findOne({_id:id});
        
        console.log(dislike);

        const blog = await Blog.findByIdAndUpdate(
            {_id:id},
            {dislike:dislike-1}
        )

        res.status(200).json({
            success:true,
            data:blog,
            message:`disliked the post `,
        });
    }
    catch(err) {
        console.error(err);
        res.status(500).json({
         success:false,
         error:err.message,
         message:"Server Error",
        }) 
    }
}
