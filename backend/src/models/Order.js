var mongoose =  require('mongoose');
var User = require('./User');
var Product = require('./Product');

var OrderSchema = Schema({
    user: [{ type: Schema.ObjectId, ref: 'User'}],
    card :[
            { type: Schema.ObjectId, ref: 'Product'},
            {ammount:{
                type : number,
                required : true,
            }},
            {total: {
                type: Number,
                required : true,
            }}
        ],
    
},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model('Order', OrderSchema);