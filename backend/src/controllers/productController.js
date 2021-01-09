const Product= require ('../models/Product');

async function getAll(req, res){
    const users = await Product.find({},);
    res.status(200).json(users);
}
async function createPro(req, res){
    const newProduct = new Product({
        
        name:  req.body.name,
        description:  req.body.description,
        price:  req.body.price,
        image:  req.body.image,
        stock:  req.body.stock,
        productCategory:  req.body.productCategory,
        user:  req.body.user,
       
    });
    
    const productSave = await newProduct.save().then(result  => result.populate({path:"productCategory"}).execPopulate());
    res.status(201).json(productSave);
}
async function updatePro(req, res){
    
    const updateproduct = await Product.findOneAndUpdate(req.params.productId, req.body, {
        new: true  //me da el objeto actualizado sino el viejo
    });

    res.status(200).json(updateproduct);
}
async function deletePro(req, res){
    await Product.findByIdAndDelete(req.params.productId);
    res.status(200).json();
}
async function getProById(req, res){

    const newproduct = await Product.findById(req.params.productId)
    .populate({
        path: "productCategory"
    })
    ;
res.status(200).json(newproduct);

}
async function getProByUserId(req, res){
    
    const newproduct = await Product.find((req.query)
    .populate({
        path: "productCategory"
    })
    .populate({
        path: "user"
    }))
    
res.status(200).json(newproduct);
}

module.exports =  {
    getAll,
    createPro,
    updatePro,
    deletePro,
    getProById,
    getProByUserId
};