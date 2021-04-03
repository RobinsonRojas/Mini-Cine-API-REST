const { query } = require('express');
const express = require('express');
const router = express.Router();

//Obteniendo el conector de la DB
const mysqlConnection = require('../database');

//Obteniendo datos globales de la tabla en la DB
router.get('/', (req, res) => {
    console.log("Metodo get read all");
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err, " Error en la consulta");
        }
    });
});

//Obteniendo datos especificos de la tabla en la DB
router.get('/:id', (req, res) => {
    const { id } = req.params;// { id } :: '/:id' 
    console.log(id, "Metodo get specific read");
    mysqlConnection.query('SELECT * FROM usuario where id_usuario = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err, " Error en la consulta");
        }
    });
});

//Insertar usuarios a la tabla de la DB
router.post('/', (req, res) => {
    //Opteniendo los datos desde Cliente
    const { id, name } = req.body;
    console.log(id, " ", name, "Metodo post Insert");
    const query = `
        SET @id = ?;
        SET @name = ?;
        CALL usuarioAddOrEdit(@id, @name);
    `;
    mysqlConnection.query(query, [id, name], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Usuario guardado' })
        } else {
            console.log(err)
        }
    });
});

//Actializar datos de la tabla en la DB
router.put('/:id', (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    console.log(id, " ", name, "Metodo put update");
    const query = 'CALL usuarioAddOrEdit(?, ?)';
    mysqlConnection.query(query, [id, name], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Usuario Actualizado' })
        } else {
            console.log(err);
        }
    });
});

//Elimindao datos de la tabla en la DB
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id, "Metodo delete");
    mysqlConnection.query('DELETE FROM usuario  WHERE id_usuario = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Usuario eliminado' });
        } else {
            console.log(err);
        }
    })
})

module.exports = router;