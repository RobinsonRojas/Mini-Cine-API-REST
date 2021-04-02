const express = require('express');
const router = express.Router();

//Obteniendo el conector de la base de datos
const mysqlConnection = require('../database');

//Obteniendo datos de la base de datos
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err , " Error en la consulara");
        }
    });
});

module.exports = router;