var express = require("express");
var router = express.Router();

const userModel = require("./users");

router.get('/', function(req, res){
  res.render('index');
});


router.get('/create', async function(req, res){
 let userData1 = await userModel.create({
  username: "David", 
  nickname: "DVD",
  description: "Hello My name is David . I am 31 years old.",

  categories: ["Java", "spring", "html", "css", "express", "mongoDB"]
 });
 res.send(userData1 );
});


//How can I perform a case-insensitive search in Mongoose?
router.get('/find', async function(req, res){
  //it will change the name to insensitive way so that if we search the username in any way either in capital or small we will get the user!
  // so ^aayush$ it means that search for this word exactly this word it doesnotmatter 
  //which way it's written ( i.e capital or small)
  var regex = new RegExp("^aayush$", 'i') ;   
  let findUser = await userModel.find({username: regex});
  res.send(findUser);
});

module.exports = router;