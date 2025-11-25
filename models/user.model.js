const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    fullname :{
        type: String,
    },
    email:{
        type:String,
        required :true,
        minLength : 3,
        trim : true
    },
    password:{
        type:String,
        required :true

    },
    cart : {
        type : Array,
        default:[]
    },
    isadmin: Boolean,
    order : {
        type : Array,
        default : []
    },
    contact : {
        type: Number
    },
    picture: {
        type:String
    }
});


module.exports = mongoose.model("User", userSchema)