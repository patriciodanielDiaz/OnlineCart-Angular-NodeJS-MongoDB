const User= require ('../models/User');
const UserType = require('../models/UserType');
const jwt = require('jsonwebtoken');
const conf = require('../config/tokenSecret');

async function getAll (req, res) {

    const users = await User.find({},);
    res.status(200).json(users);
   
};

async function create (req, res) {

    const newUser = new User({
        name: req.body.name,
        lastname:  req.body.lastname,
        dni:  req.body.dni,
        email:  req.body.email,
        username:  req.body.username,
        password:  req.body.password,
        city:  req.body.city,
        postalcode:  req.body.postalcode,
        address:  req.body.address,
        telephone: req.body.telephone,
        age:  req.body.age,
        userType: req.body.userType

    });
    
    const userSave = await newUser.save().then(result  => result.populate({path:"userType"}).execPopulate());

    res.status(201).json(userSave); 
    
};

async function getById(req, res) {

    const newuser = await User.findById(req.params.userId)
            .populate({
                path: "userType"
            })
            ;
    res.status(200).json(newuser);
};

async function updateUser(req, res){

    const updateuser = await User.findOneAndUpdate(req.params.userId, req.body, {
        new: true  //me da el objeto actualizado sino el viejo
    });

    res.status(200).json(updateuser);

};

async function deleteUser(req, res){
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).json();
};

async function signUp(req, res){
    
    //var logUser =await User.find
    const {name,lastname,dni,email,username,password,city,postalcode,address,telephone,age,userType}=req.body;

    var newUser= new User({
        name :name,
        lastname:lastname,
        dni:dni,
        email:email,
        username:username,
        password:await User.encryptPassword(password),
        city:city,
        postalcode:postalcode,
        address:address,
        telephone:telephone,
        age:age
    });

    if(userType){
        const found= await UserType.find({userType:{$in:userType}});
        newUser.userType = found.map(UserType => UserType._id);
    }else{
        const type = await UserType.findOne({userType:"client"});
        newUser.userType = [type._id];
    }
    
    var saveUser = await newUser.save();
    
    const token = jwt.sign({id:saveUser._id},conf.SECRET,{
        expiresIn: 86400 //24hours
    })

    res.status(201).json({token});
};

async function signIn(req, res){
   
    const userFound = await User.findOne({email:req.body.email}).populate("userType");
    
    if(!userFound) return res.status(400).json({message: "User not found"});

    const matchpass = await User.comparePassword(req.body.password , userFound.password);

    if(!matchpass) return res.status(401).json({token: null, message: "Invalid password"});

    const token = jwt.sign({id:userFound._id},conf.SECRET,{
        expiresIn: 1800 //meida hora
    });
    
    res.json({token});

};

async function getProfile(req, res) {

    const user = await User.findById(req.id);
    if(!user) return res.status(400).json({message: "User not found"});
    res.status(200).json(user);
   
};

async function updateUserLogin(req, res) {

    const {password}=req.body;

    const user = await User.findById(req.id);
    if(!user) return res.status(400).json({message: "User not found"});

    user.password = await User.encryptPassword(password);
    
    const updateuser = await User.findOneAndUpdate(user._Id, req.body, {
        new: true  //me da el objeto actualizado sino el viejo
    });

    res.status(200).json(updateuser);
   
};

module.exports =  {
    getAll,
    create,
    getById,
    updateUser,
    deleteUser,
    getProfile,
    updateUserLogin,
    signIn,
    signUp
};