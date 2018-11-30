var express=require("express");
var conn=require("../config/db_connections");
var connection=conn.getconnection();
connection.connect();
var router=express.Router();
router.get("/",function(req,res){
connection.query("select * from registration",function(err,recordsarray,fields){
    if(err){
        console.log("error while fetching the data");
    }else{
    res.send(recordsarray);
    }
})
})
router.get("/count", (req, res)=>{
    connection.query("select count(*) as total_count from registration", (err, recordsarray, fields)=>{
        res.send(recordsarray[0])
    } )
} )

module.exports=router;