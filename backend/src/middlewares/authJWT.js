const jwt = require('jsonwebtoken');
const conf = require('../config/tokenSecret');
const User =require('../models/User');
const UserType =require('../models/UserType');

async function verifyToken(req,res,next){

    try{
        const token= req.headers["x-access-token"];
        //console.log(token);

        if(!token) return res.status(403).json({message:"No token provided"})

        const decoded = jwt.verify(token,conf.SECRET);
        req.id = decoded.id;   
        
        const user = await User.findById(decoded.id,{password:0}).populate("userType");
        if(!user) return res.status(404).json({message:"no user found"})
        
        //console.log(user);
        next()
    } catch(error){
        return res.status(401).json({message:'Unauthorized'})
    }
    
}

async function isAdmin(req,res,next){

    console.log("area administrador");

    const user = await User.findById(req.id);
    const types = await UserType.find({_id:{$in:user.userType}});

    for(let i=0; i<types.length; i++){
        if(types[i].userType === "administrator"){
            next();
            return;
        }
    }

    return res.status(403).json({message:"Require Admin role"});
}

async function isClient(req,res,next){

    console.log("area cliente");
    
    const user = await User.findById(req.id);
    const types = await UserType.find({_id:{$in:user.userType}});

    for(let i=0; i<types.length; i++){
        if(types[i].userType === "client" || types[i].userType === "adminstrator"){
            next();
            return;
        }
    }

    return res.status(403).json({message:"Require client role"});
        
}
module.exports ={
    verifyToken,
    isAdmin,
    isClient
}