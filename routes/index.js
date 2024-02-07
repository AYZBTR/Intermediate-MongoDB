var express = require("express");
var router = express.Router();

const userModel = require("./users");

router.get('/', function(req, res){
  res.render('index');
});


/* router.get('/create', async function(req, res){
 let userData1 = await userModel.create({
  username: "David", 
  nickname: "DVD",
  description: "Hello My name is David . I am 31 years old.",

  categories: ["Java", "spring", "html", "mongoose", "express", "mongoDB"]
 });
 res.send(userData1 );
}); */


//Question1: How can I perform a case-insensitive search in Mongoose?

/* router.get('/find', async function(req, res){
  //it will change the name to insensitive way so that if we search the username in any way either in capital or small we will get the user!
  // so ^aayush$ it means that search for this word exactly this word it doesnotmatter 
  //which way it's written ( i.e capital or small)
  var regex = new RegExp("^aayush$", 'i') ;   
  let findUser = await userModel.find({username: regex});
  res.send(findUser);
}); */


//Question 2: How do I find documents where an array field contains all of a set of values?
/* router.get('/find', async function(req, res){
  let findUser = await userModel.find({categories:{$all:["mongoose"]}});
  res.send(findUser);
}); */

//Question 3. How can I search for documents with a specific date range in Mongoose?


/* router.get('/find', async function(req,res){

  var date1 = new Date('2024-02-07');
  var date2 = new Date('2024-02-09');
  //gte = greater than or equals to , lte = less than or equals to :D
  let findUser = await userModel.find({datecreated:{ $gte:date1, $lte:date2}}); 
  res.send(findUser);
}); */

//Question 4: How can I filter documents based on the existence of a field in Mongoose?

/* router.get('/find', async function(req, res){
  let findUser = await userModel.find({categories:{ $exists : true }});
  res.send(findUser);
}); */

//Question 5: How can I filter documents based on a specific field’s length in Mongoose?
router.get('/find', async function(req, res){
 let findUser = await userModel.find({
  $expr:{
    $and:[
      {$gte:[{$strLenCP: '$nickname'},0]},
      {$lte:[{$strLenCP: '$nickname'},4]}
    ]
  }
  
 });
 res.send(findUser)
});



module.exports = router;
