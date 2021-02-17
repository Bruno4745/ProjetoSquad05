const mysql = require('mysql');

const connMySQL = () => {
  return connection =  mysql.createConnection({
    host: 'bihqmslf5tgdwvigac5u-mysql.services.clever-cloud.com',
    user: 'uo8mgxgsr1488svt',
    password: '4oOQEsWdKGBwKN10UQfC',
    database: 'bihqmslf5tgdwvigac5u'
  });
}
module.exports = () => {
  return connMySQL;
}