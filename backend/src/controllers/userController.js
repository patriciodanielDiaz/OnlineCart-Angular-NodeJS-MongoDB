const User= require ('../models.User');

async function getAll (req, res) {

    const users = await user.find();
    res.status(200).json(users);
    
};

async function create (req, res) {

    const newUser = new user({
        name: req.body.name,
        lastname:  req.body.lastname,
        dni:  req.body.dni,
        email:  req.body.email,
        username:  req.body.username,
        password:  req.body.password,
        city:  req.body.city,
        address:  req.body.address,
        age:  req.body.age,
        //falta usertype

    });
    
    const userSave = await newUser.save();
    res.status(201).json(userSave); 
    
};
async function getById(req, res) {

    const newuser = await user.findById(req.params.userId);
    res.status(200).json(newuser);
}

module.exports =  {
    getAll,
    create,
    getById
};