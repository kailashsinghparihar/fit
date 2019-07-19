var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// register api

router.post("/register",function (req,res,next){
  res.json({login:true});
});

require("../models/batch");
require("../models/User");
require("../models/cont")
var mongoose=require("mongoose");
var myfit=mongoose.model("myfitness");
var user =mongoose.model("users");
var comment=mongoose.model("comments");




router.post('/addd', function(req, res) {
  new myfit({name : req.body.name,
    username: req.body.username}
)
  .save(function(err, myfit) {
    console.log(err);
    console.log(myfit);
    res.json(myfit);
  });
});




router.get('/view',function(req,res){
myfit.find(function(err,myfit){
  console.log(err);
  console.log(myfit);  
  res.json(myfit);  
});
});




router.put('/update/:id', function(req, res) {
  var query = {"_id": req.params.id};
  var update = {name : req.body.name,  username: req.body.username};
  var options = {new: true};
  myfit.findOneAndUpdate(query, update, options, function(err,myfit){
    console.log(myfit)
    res.json(myfit);
  });
});



 
router.delete('/delete/:id', function(req, res) {
  var query = {"_id": req.params.id};
  myfit.findOneAndRemove(query, function(err, myfit){
    try {
      if(myfit===null){
        res.json({msg:"No User Exists"});
      }
      res.json({msg:"user Deleted"});
    } catch (err) {
      console.log('user not exists');
    }
  });
});




router.post('/add', function(req, res) {
  try {
  if(req.body.password===req.body.confirmpassword){
  new user({
    username: req.body.username,
    password: req.body.password,
    email:req.body.email,
  }
)
  .save(function(err, user) {
    console.log(err);
    console.log(user);
    res.json(user);
  });
}
else{
  res.json({msg:"Password not Matched"});
}
} catch (err) {
    console.log(err);
}
});




router.get('/useriew',async (req,res) =>{
  const users = await user.find().select('-password');
  res.json(users);  
  });




  router.put('/user/update/:id', function(req, res) {
    var query = {"_id": req.params.id};
    var update = {username : req.body.username,  password: req.body.password,  email:req.body.email };
    var options = {new: true};
    user.findOneAndUpdate(query, update, options, function(err,user){
      console.log(user)
      res.json(user).select('-password');
    });
  });



   
  router.delete('/user/delete/:id', function(req, res) {
    var query = {"_id": req.params.id};
    myfit.findOneAndRemove(query, function(err, user){
      try {
        if(user===null){
          res.json({msg:"No User Exists"});
        }
        res.json({msg:"user Deleted"});
      } catch (err) {
        console.log('user not exists');
      }
    });
  });





  router.post('/addcomment', function(req, res) {
    new comment({name : req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      comm: req.body.comm
    })
    .save(function(err, comment) {
      console.log(err);
      console.log(comment);
      res.json(comment);
    });
  });
  
  
  
  
  router.get('/viewcomment',function(req,res){
  comment.find(function(err,comment){
    console.log(err);
    console.log(comment);  
    res.json(comment);  
  });
  });
  
  
  
  
  router.put('/updatecomment/:id', function(req, res) {
    var query = {"_id": req.params.id};
    var update = {comm : req.body.comm};
    var options = {new: true};
    comment.findOneAndUpdate(query, update, options, function(err,comment){
      console.log(comment)
      res.json(comment);
    });
  });
  
  
  
   
  router.delete('/deletecomment/:id', function(req, res) {
    var query = {"_id": req.params.id};
    comment.findOneAndRemove(query, function(err, comment){
      try {
        if(comment===null){
          res.json({msg:"No comment Exists"});
        }
        res.json({msg:"comment Deleted"});
      } catch (err) {
        console.log('user not exists');
      }
    });
  });
  
  



module.exports = router;
