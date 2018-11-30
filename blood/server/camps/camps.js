var express=require("express");
var conn=require("../config/db_connections");
var connection=conn.getconnection();
connection.connect();
var router=express.Router();
router.get("/",function(req,res){
connection.query("select * from blood_camps",function(err,recordsarray,fields){
    if(err){
        console.log("error while fetching the data");
    }else{
    res.send(recordsarray);
    }
})
})
router.get("/list", (req, res)=>{
    connection.query("select * from blood_camps order by id desc limit 2", (err, recordsarray, fields)=>{
        res.send(recordsarray)
    } )
} )


module.exports=router;