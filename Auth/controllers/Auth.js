const bcrypt = require('bcrypt');
const User =  require('../models/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()


// signup route handler

exports.signup = async (req,res) =>{
    try{
        // get data
        const {name,email,password,role} =  req.body;

        // check if user already exits 
        const existingUser = await User.findOne({email})

        if(existingUser){
            return res.status(400).json({
                success: false,
                messgae : 'user already exist'
            })
        }

        // secure the password
        let hashPassword;
        try{
            hashPassword = await bcrypt.hash(password,10)
        }
        catch(err){
            return res.status(400).json({
                success: false,
                messgae : 'Error in hashing password'
            })
        }


        // create the new entry
        const user = await User.create({
            name,email,password:hashPassword,role
        })

        return res.status(200).json({
            success: true,
            messgae : 'User craeted Successfully.'

        })
        
    }catch(err){
        console.error(err);
        return res.status(400).json({
            success: false,
            messgae : 'User cannot be registered , please try again later'
        })
    }
}

exports.login = async(req,res) =>{
    try{
        // get data
        const {email,password} =  req.body;

        if(!email || !password){
            return res.status(400).json({
                success : false,
                messgae : "Please fill all the details carefully"
            })
        }

        // check user
        var user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                success : false,
                messgae : "User is not registred"
            })
        }

        // verify password and generate the jwt token

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role
        };

        const key = process.env.JWT_SECRET;

        if(await bcrypt.compare(password,user.password)){
            // password match
            let token =  jwt.sign(payload,key,{expiresIn:"2h"});

            user = user.toObject();
            user.token = token;
            user.password = undefined;

            const options = {
                expires : new Date( Date.now()+ 3 * 24 * 60 * 60 * 1000),
                httpOnly : true
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                messgae :" User Logged in Successfully"
            }); 

        }else{
            // password do not match
            return res.status(403).json({
                success : false,
                messgae : "Password Incorrect"
            })
        }
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            messgae :"Login failure"
        })
    }
}


