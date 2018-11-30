var express = require("express");
var prop = require("../config/db_properties");
var router = express.Router();
router.post("/",function(req,res)
         {
            var token = req.body.token;
            if(token == prop.token)
                 {
                 prop.token ="";
                res.send({"token":"deleted successfully"});
        }
        else
             {
             res.send("Error..!");
        }
    })
module.exports = router;