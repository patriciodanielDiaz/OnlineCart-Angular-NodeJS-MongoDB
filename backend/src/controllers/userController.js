const user= require ('../models/User');

async function getAll (req, res) {

    const users = await user.find({},);
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

    const newuser = await user.findById(req.params.userId)
            .populate({
                path: "userType"
            })
            ;
    res.status(200).json(newuser);
};

async function updateUser(req, res){

    const updateuser = await user.findOneAndUpdate(req.params.userId, req.body, {
        new: true  //me da el objeto actualizado sino el viejo
    });

    res.status(200).json(updateuser);

};

async function deleteUser(req, res){
    await user.findByIdAndDelete(req.params.userId);
    res.status(200).json();
};

module.exports =  {
    getAll,
    create,
    getById,
    updateUser,
    deleteUser
};