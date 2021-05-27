const express = require('express');
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extented :true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var num1=Number(req.body.n1);
  var num2=Number(req.body.n2);

  var result = num1 + num2;
  res.send("result of calculation is "+ result );
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
  var weight=parseFloat(req.body.w);
  var height=parseFloat(req.body.h);
  var result=weight/(height*height);
  res.send( "Calculated BMI is "+ result );
});
app.listen(3000,function(){
  console.log("server started at port 3000");
});
