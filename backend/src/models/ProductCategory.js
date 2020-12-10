var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = require('./Product');

var ProductCategorySchema = Schema({
     category : {
         type : String,
         required : true,
         trim: true   //borra espacios en blanco
     },
     versionKey: false,
     products :[{ type: Schema.ObjectId, ref: 'Product'}],
     timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });

    module.exports = mongoose.model('ProductCategory', ProductCategorySchema);