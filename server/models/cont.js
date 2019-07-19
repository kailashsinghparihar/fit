var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var comment = new Schema(
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
            phone:{
                type:String
            },
            comm:{
                type:String
            }
            
    }
    );
    mongoose.model('comments', comment);