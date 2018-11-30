var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(function(req,res,next)
    {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,content-Type,Accept");
    next();
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

var registration=require("./registration/registration");
app.use("/registration",registration);

var adminlogin=require("./adminlogin/adminlogin");
app.use("/adminlogin",adminlogin);

var insertcamps=require("./insertcamps/insertcamps");
app.use("/insertcamps",insertcamps);

var update=require("./updateuser/update");
app.use("/update",update);

var userlogin = require("./userlogin/userlogin");
app.use("/userlogin",userlogin);

var donors = require("./donors/donors");
app.use("/donors",donors);

var camps = require("./camps/camps");
app.use("/camps",camps);

var logout = require("./logout/logout");
app.use("/logout",logout);

var adminlogout = require("./adminlogout/adminlogout");
app.use("/adminlogout",adminlogout);

app.listen(8080);
console.log("server listening the port no.8080");