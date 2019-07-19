var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var User = new Schema(
    {
         date : {
             type:Date,
            default:Date.now
        }, 
            name : {
                type:String,
                unique:true
            },
            email:{
                type:String
            },
            password:{
                type:String
            },
            address:{
                type:String
            },
            city:{
                type:String
            }
    }
    );
    mongoose.model('users', User);