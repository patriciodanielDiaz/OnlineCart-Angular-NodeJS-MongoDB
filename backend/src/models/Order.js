var mongoose =  require('mongoose');
var User = require('./User');
var Product = require('./Product');
var Schema =mongoose.Schema;

var OrderSchema = Schema({
    user: [{ type: Schema.ObjectId, ref: 'User'}],
    cart :[
            [    
                {
                    addedProduct:{ 
                        type: Schema.ObjectId, ref: 'Product'
             
                    }
                },
                {
                    amount:{
                        type : Number,
                        required : true,
                    }
                },
                {
                    priceTotal: {
                        type: Number,
                        required : true,
                    }
                }
            ]
        ],
    total:{
        type:Number,
        required : true,
    }
    
},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model('Order', OrderSchema);