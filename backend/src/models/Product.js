var mongoose =  require('mongoose');
var User = require('./User');
var ProductCategory = require('./ProductCategory');
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    stock: Number,
    productCategory: {type:Schema.ObjectId, ref: 'ProductCategory'},
    user: { type: Schema.ObjectId, ref: 'User'},
    versionKey: false,
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model('Product', ProductSchema);