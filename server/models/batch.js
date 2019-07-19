var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
 
var myfit = new Schema(
    {
        name : {
            type:String
        },
         date : {
             type:Date,
            default:Date.now
        }, 
            username : {
                type:String
            }
    }

   
    );
 
mongoose.model('myfitness', myfit);