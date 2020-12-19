const Order = require('../models/Order');

async function getAll(req, res){
    const orders = await Order.find();
    res.status(200).json(orders); 
};
async function createOder(req, res){

    const newOrder = new Order({
        user: req.body.user,
        cart:  req.body.lastname,
    });
    
    const orderSave = await newOrder.save().then(result  => result.populate({path:"user"}).execPopulate());

    res.status(201).json(orderSave); 
};
async function updateOrder(req, res){

    
};
async function deleteOrder(req, res){
    await Order.findByIdAndDelete(req.params.orderId);
    res.status(200).json();
};
async function getOrderById(req, res){
    const newproduct = await Order.findById(req.params.orderId);
    res.status(200).json(newproduct);

};

module.exports ={
    
 getAll,
 createOder,
 updateOrder,
 deleteOrder,
 getOrderById
}