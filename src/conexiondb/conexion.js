var mysql = require('mysql');
const config = require('../../config/authdb.key');
 var mysql_pool  = mysql.createPool({
    connectionLimit : 100,
    host            : 'localhost',
    user            : config.user,
    password        : config.password,
    database        : 'db_rutasheca',
    port            :3306   
  });

 module.exports.mysql_pool=mysql_pool;