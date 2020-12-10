var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var UserType = require('./UserType');

var UserSchema = Schema({
    name: {
        type : String,
        required : true,
    },
    lastname:  {
        type : String,
        required : true,
    },
    dni:  {
        type : Number,
        required : true,
        trim: true,
        unique: true,
    },
    email:  {
        type : String,
        required : true,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [ (email)=>{var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(email)}, 'Please fill a valid email address'],

    },
    username:  {
        type : String,
        required : true,
        trim: true,
        unique: true,
    },
    password:  {
        type : String,
        required : true,
        trim: true 
    },
    city: {
        type : String,
        required : true,
    },
    postalcode: {
        type: Number,
        required : true,
    },
    address:  {
        type : String,
        required : true,
    },
    telephone: {
        type: Number,
        required : true, 
    },
    age: {
        type : Number,
        required : true,
    },
    userType: [{ type: Schema.ObjectId, ref: 'UserType'}],
    versionKey: false,
    },{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model('User', UserSchema);