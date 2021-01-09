const TYPES = ["client","administrator"];
const User = require('../models/User');

function checkTypeExist(req,res,next){
    if(req.body.userType){
        for(let i = 0;i<req.body.userType; i++){
            if(!TYPES.includes(req.body.userType[i])){
                return  res.status(400).json({
                    message: "Type user ${req.body.userType[i]} does not exists"
                })
            }
        }
    }
    next();
}
async function checkDuplicateUsernameOrEmail(req,res,next){
    
    const user = await User.findOne({username: req.body.username});
    if(user) return res.status(400).json({message: "The user already exists"});

    const email = await User.findOne({email: req.body.email});
    if(email) return res.status(400).json({message: "The email already exists"});

    const dni = await User.findOne({dni: req.body.dni});
    if(dni) return res.status(400).json({message: "DNI already exists"});

    next();
}

module.exports ={
    checkTypeExist,
    checkDuplicateUsernameOrEmail
}