const Blog = require("../models/blog")

exports.deleteBlog = async (req,res)=>{
    try{
        const {id} = req.params;

        const blog = await Blog.findByIdAndDelete({_id:id});

        if(!blog){
            res.status(404).json(
                {
                    success:false,
                    message:"No data found"
                }
            )
        }

        res.status(200).json(
            {
                success:true,
                message:"Post deleted successfully"
            }
        )
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Server Error",
        })
    }
}