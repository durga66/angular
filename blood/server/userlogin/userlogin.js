var express = require("express");
var conn = require("../config/db_connections");
var connection = conn.getconnection();
connection.connect()
var token = require("../token/token");
var prop = require("../config/db_properties");
var router = express.Router();
router.post("/",function(req,res)
    {
        var number=req.body.number;
        var password=req.body.password;
connection.query("select * from registration where number='"+number+"' and password='"+password+"'",function(err,recordsArray,fields)
    {
        if(recordsArray.length>0)
         {
            var my_token = token({'number':number,'password':password},'durga@rao.in');
            prop.token = my_token;
            res.send({'login':'success','token':my_token});
        } else 
             {
             res.send({'login':'fail'});
           }
      });
  });
module.exports = router;