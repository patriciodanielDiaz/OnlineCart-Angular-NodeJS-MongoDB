var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./User');

var UserTypeSchema = Schema({
     userType : {
         type : String,
         required : true,
         trim: true   //borra espacios en blanco
     },
     versionKey: false,
     users :[{ type: Schema.ObjectId, ref: 'User'}],
    },{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model('UserType', UserTypeSchema);