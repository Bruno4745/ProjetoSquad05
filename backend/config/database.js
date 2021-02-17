const mysql = require('mysql');

const connMySQL = () => {
  return connection =  mysql.createConnection({
    host     : process.env.MYSQL_ADDON_HOST,
    database : process.env.MYSQL_ADDON_DB,
    user     : process.env.MYSQL_ADDON_USER,
    password : process.env.MYSQL_ADDON_PASSWORD
  });
}
module.exports = () => {
  return connMySQL;
}