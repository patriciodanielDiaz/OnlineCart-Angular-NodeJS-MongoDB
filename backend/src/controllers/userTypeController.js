const userType= require('../models/UserType');

async function getAll(req, res) {

    const userTypes = await userType.find();
    res.status(200).json(userTypes);
    
};
async function create(req,res){

    const newType = new userType({
        userType: req.body.userType,
    });
    
    const typeSave = await newType.save();
    res.status(201).json(typeSave); 
};

module.exports =  {
    getAll,
    create
};