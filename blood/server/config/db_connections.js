var mysql=require("mysql");
var prop=require("./db_properties");
module.exports={
    getconnection:function(){
        return mysql.createConnection({
            host:prop.host,
            user:prop.user,
            password:prop.password,
            database:prop.database
        })
    }
}