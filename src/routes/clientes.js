const { query } = require('express');
const express = require('express');
const router = express.Router();

//Obteniendo el conector de la base de datos
const mysqlConnection = require('../database');

//Obteniendo datos globales de la tabla en la base de datos
router.get('/', (req, res) => {
    console.log("XXX LINE 9");
    mysqlConnection.query('SELECT * FROM usuario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err , " Error en la consulta");
        }
    });
});

//Obteniendo datos especificos de la tabla en la base de datos
router.get('/:id', (req, res) => {
    const { id } = req.params;// { id } :: '/:id' 
    console.log(id, "LINE 21");
    mysqlConnection.query('SELECT * FROM usuario where id_usuario = ?', [id], (err, rows, fields)  =>{
        if (!err) {
            res.json(rows[0]);
        } else {    
            console.log(err , " Error en la consulta");
        }
    } );
});//router.get

//Insertar usuarios a la tabla de la DB
router.post('/', (req, res) =>{
    const {id, name} = req.body;//Opteniendo los datos desde Cliente
    console.log(id," ",name, "LINE 34");
    const query = `
        SET @id = ?;
        SET @name = ?;
        CALL usuarioAddOrEdit(@id, @name);
    `;
    mysqlConnection.query(query, [id, name], (err, rows, fields) =>{
        if(!err){
            res.json({Status:'Usuario guardado'})
        }else{
            console.log(err)
        }
    });
});

//Actializar datos de la tabla en la DB
router.put('/:id', (req, res) =>{
    const {name} = req.body;
    const { id } = req.params;
    console.log(id," ",name, "LINE 52 XXXXX");
    const query = 'CALL usuarioAddOrEdit(?, ?)';
    mysqlConnection.query(query, [id, name], (err, rows, fields) =>{
        if(!err){
            res.json({Status:'Usuario Actualizado'})
        }else{
            console.log(err)
        }
    });
});

module.exports = router;