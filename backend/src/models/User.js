var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var UserType = require('./UserType');
var bcrypt = require('bcryptjs');

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
        trim: true
    },
    email:  {
        type : String,
        required : true,
        trim: true,
        lowercase: true,
        validate: [ (email)=>{
            var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return re.test(email)}, 'Please fill a valid email address'],

    },
    username:  {
        type : String,
        required : true,
        trim: true
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
        type: String,
        required : true, 
    },
    age: {
        type : Number,
        required : true,
    },
    userType: [{ type: Schema.ObjectId, ref: 'UserType'}],
    versionKey: false,
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
        versionKey: false}
);

UserSchema.statics.encryptPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,salt);
}
UserSchema.statics.comparePassword = async(password,receivedPassword)=>{
    return await bcrypt.compare(password.receivedPassword);
}

module.exports = mongoose.model('User', UserSchema);