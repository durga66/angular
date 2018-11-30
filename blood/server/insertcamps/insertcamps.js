var express=require("express")
var conn=require("../config/db_connections");
var connection=conn.getconnection();
connection.connect();
var router=express.Router();
router.post("/",function(req,res)
        {
        
             var campname=req.body.campname;
             var date=req.body.date;
             var place=req.body.place;
             var city=req.body.city;
             var pincode=req.body.pincode;
             var contact=req.body.contact;
connection.query("insert into blood_camps (campname,date,place,city,pincode,contact) values('"+campname+"','"+date+"','"+place+"','"+city+"','"+pincode+"','"+contact+"')",
        function(err,result) {
                                 if(err) {
                                     console.log(err);
                                    res.json({'insert':'fail'});
                      } else {
                                res.json({'insert':'success'})
                     }
                });
    })
module.exports=router;