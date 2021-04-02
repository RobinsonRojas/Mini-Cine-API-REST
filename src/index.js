const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware

//Routers

//Starting the server
app.listen(app.get('port'), () => {
    console.log("Servidor prendido en el puerto ", app.get('port'));
});

