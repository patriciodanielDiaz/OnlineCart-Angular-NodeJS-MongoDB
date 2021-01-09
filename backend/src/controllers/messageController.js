const Message = require('../models/Message');
const jwt = require('jsonwebtoken');
const conf = require('../config/tokenSecret');
const User = require('../models/User');

async function create(req,res){

    const newMessage = new Message({
        from: req.body.from,
        to:  req.body.to,
        message:  req.body.message,

    });
    
    const messageSave = await newMessage.save();

    res.status(201).json(messageSave); 
}
async function deletedMessage(req,res){

    const updateMessage = await Message.findOneAndUpdate(req.body._id, req.body, {
        new: true  //me da el objeto actualizado sino el viejo
    });

    res.status(200).json(updateMessage);

}
async function getByUserId(req, res){
    
    const user = await User.findById(req.id);
    if(!user) return res.status(400).json({message: "User not found"});
    
    const messages = await Message.find(
        {from:user._id,
         isDeleted:false});
    
    res.status(200).json(messages);

}
async function getAll(req, res){
    
    const messages = await Message.find(req.query);    
    res.status(200).json(messages);

}

module.exports ={
    create,
    deletedMessage,
    getByUserId,
    getAll
}