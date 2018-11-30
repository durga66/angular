var express=require("express")
var conn=require("../config/db_connections");
var connection=conn.getconnection();
connection.connect();
var router=express.Router();
router.post("/",function(req,res) {

    var firstname=req.body.firstname;
    var lastname=req.body.lastname;
    var dob=req.body.dob;
    var bloodgroup=req.body.bloodgroup;
    var email=req.body.email;
    var number=req.body.number;
    var city=req.body.city;
    var password=req.body.password;
    var pincode=req.body.pincode; 

connection.query("insert into registration values('"+firstname+"','"+lastname+"','"+dob+"','"+bloodgroup+"','"+email+"',"+number+",'"+city+"','"+password+"',"+pincode+")", 
            function(err,result) {
                                if(err){
                                    res.json({'insert':'fail'});
                             } else {
                             res.json({'insert':'success'})
                     }
                })
        })
module.exports=router;