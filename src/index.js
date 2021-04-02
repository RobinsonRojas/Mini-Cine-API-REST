const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.json());

//Routes
app.use(require('./routes/clientes'))

//Starting the server
app.listen(app.get('port'), () => {
    console.log("Servidor prendido en el puerto ", app.get('port'));
});

