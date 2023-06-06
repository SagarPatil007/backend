const express = require('express')
const router = express.Router()

//import controller
const {createBlog} = require("../controllers/createBlog");
const {getBlog,getBlogById} = require("../controllers/getBlog");
const {likePost,dislikePost} = require("../controllers/like");
const {updateBlog} = require("../controllers/updateBlog");
const {deleteBlog} = require("../controllers/deleteBlog");

//define APi routes
router.post('/createblog',createBlog);
router.get('/getblog',getBlog);
router.get('/getblog/:id',getBlogById);
router.put('/likePost/:id',likePost);
router.put('/dislikePost/:id',dislikePost);
router.put('/updateblog/:id',updateBlog);
router.delete('/deleteblog/:id',deleteBlog);


module.exports = router