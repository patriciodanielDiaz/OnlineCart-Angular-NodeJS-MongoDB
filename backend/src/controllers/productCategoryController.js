
const ProductCategory= require('../models/ProductCategory');

async function getAll(req, res) {

    const pro = await ProductCategory.find();
    res.status(200).json(pro);
    
};
async function create(req,res){

    const newPro = new ProductCategory({
        category: req.body.category,
    });
    
    const proSave = await newPro.save();
    res.status(201).json(proSave); 
};

module.exports =  {
    getAll,
    create
};
