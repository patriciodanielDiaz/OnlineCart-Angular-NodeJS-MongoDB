const Order = require('../models/Order');
var Cart = require('../models/Cart');
const Product= require ('../models/Product');

async function addCart(req, res){
    
    var productId = req.params.productId;
    //var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
    var cart = new Cart({items:{}});
    Product.findById(productId, (err, product) => {
      
        cart.add(product, product.id);
        console.log(cart);
        //req.session.cart = cart;

    });

}

async function getAllCart(req, res){

    const orders = await Order.find({},);
    res.status(200).json(orders);
    
}

async function getCart(req, res){

    /*if (!req.session.cart) {
        return res.render('cart/cart', { products: null });
    }*/

    //con session
    //var cart = new Cart(req.session.cart);
    
    var cart = new Cart(null);
    var total = parseFloat(cart.totalPrice).toFixed(2);

    res.status(200).json(cart,total);

    
}

async function remove(req, res){
    var productId = req.params.productId;
    var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
    cart.removeItems(productId);
    req.session.cart = cart;
    res.redirect('/cart/shopping-cart');

};

async function reduce(req, res){
    var productId = req.params.productId;
    var cart = new Cart(req.session.cart ? req.session.cart : { items: {} });
    cart.reduceItem(productId);
    req.session.cart = cart;
    res.redirect('/cart/shopping-cart');

};


module.exports ={ 
    addCart,
    getAllCart,
    getCart,
    remove,
    reduce
}