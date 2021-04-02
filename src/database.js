const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'cinema',
  multipleStatements: true
});

//Conectando con la base de datos
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err , " Error en al conexion con la base de datos");
    return;
  } else {
    console.log('Base de datos conectada');
  }
});

module.exports = mysqlConnection;