var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();

router.get('/',function(req,res){
  res.json({"error" : false, "message" : "Hello !"});
});

router.post('/add',function(req,res){
  res.json({"error" : false, "message" : "success", "data" : req.body.num1 + req.body.num2});
});

/*** Login Function ****/

router.post('/login',function(req,res){
  if(req.body.password && req.body.password.length > 7 //longer than 7 characters
  && req.body.password.match(new RegExp("[A-Z]")) //has one capital letter
  && req.body.password.match(new RegExp("[0-9]"))) //has a digit 0-9
  {
    console.log("Correct Password!");
    res.status(200).send({"message": "Correct Password"});
  }
  else
  {
    console.log("Invalid Password!");
    res.status(400).send({ "message": "Invalid Password" });
  }
});

app.use('/',router);

app.listen(3000,function(){
  console.log("I am listening at PORT 3000");
})
