var express = require("express");
var conn = require("../config/db_connections");
var connection = conn.getconnection();
connection.connect()
var token = require("../token/token");
var prop = require("../config/db_properties");
var router = express.Router();
router.post("/",function(req,res){
var aname=req.body.aname;
var upwd=req.body.upwd;
connection.query("select * from login_details where aname='"+aname+"' and upwd='"+upwd+"'",function(err,recordsArray,fields)
         {
        if(recordsArray.length>0)
                 {
                var my_token = token({'aname':aname,'upwd':upwd},'durga5107@rao.in');
                 prop.token = my_token;
                res.send({'login':'success','token':my_token});
        }   
        else
            {
            res.send({'login':'fail'});
        }
    });
});
module.exports = router;