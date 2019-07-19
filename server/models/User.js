var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var User = new Schema(
    {
         date : {
             type:Date,
            default:Date.now
        }, 
            username : {
                type:String,
                unique:true
            },
            password:{
                type:String
            },
            email:{
                type:String
            }
    }

   
    );
    mongoose.model('users', User);