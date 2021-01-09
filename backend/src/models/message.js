var mongoose =  require('mongoose');
var User = require('./User');
var ProductCategory = require('./ProductCategory');
var Schema = mongoose.Schema;

var MessageSchema = Schema({
   
    from: { type: Schema.ObjectId, ref: 'User'},
    to: { type: Schema.ObjectId, ref: 'User'},
    message: String,
    isDeleted: {
        type :Boolean,
        default: false
    },
    versionKey: false,
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model('Message', MessageSchema);