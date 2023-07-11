const mysql = require ('mysql');
let connection = mysql.createConnection({
 host:"localhost",
  database: "cloud_iot_gateway",
  user: "root",
  password: "root",
  port: 8889
});

connection.connect((err)=>{
    if(!err)
    {
    console.log("youppppiiiiii good connection !");
    }
    else
    console.log(err);
});

module.exports = connection;