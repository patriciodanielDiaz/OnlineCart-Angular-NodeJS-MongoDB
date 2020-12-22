var mongoose =  require('mongoose');
var User = require('./User');
var Product = require('./Product');
var Schema =mongoose.Schema;

var OrderSchema = Schema({
    user: [{ type: Schema.ObjectId, ref: 'User'}],
    cart :{
            items: [    {  
                        
                            item:{ 
                                type: Schema.ObjectId, ref: 'Product'
                    
                            }
                        ,
                        
                            qty:{
                                type : Number,
                                required : true,
                            }
                        }
                    ],
             totalPrice: Number
            },
    
},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model('Order', OrderSchema);