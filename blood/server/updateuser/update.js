var express=require("express");
var conn=require("../config/db_connections");
var connection=conn.getconnection();
connection.connect();
var router=express.Router();
router.post("/",function(req,res){
    var number=req.body.number;
    var password=req.body.password;
connection.query("update registration set password='"+password+"' where number="+number,function(err,result)
        {
         if(err) 
            {
            res.json({'update':'fail'});
        } else
            {
            res.json({'update':'success'})
        }
    })
})
module.exports=router;