# 📃Descripcion
En este proyecto se desarrolla una API RES utilizando node.js y MySQL, donde tendremos una direccion de internet donde podemos perdir los datos que esten almacenados en la base de datos MySQL, añadir nuevos datos, actualizarlos y eliminarlos con los metodos GET, POST, PUT y DELETE. Que se puden probar des de postman.
## 🎬Video
link

## 👨‍💻Tecnologías
- [Node.js](https://nodejs.org/es/)
 - [NPM](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/)
- [Postman ](www.postman.com)


## ⚙Configuracion inicial del proyecto
1. Inicializa un package.json donde esta la configuracion y descripcion del proyecto.
    ```bash
    $  npm init --yes`
    ```
2. Instala los modulos de node.js para la cracion del servidor con express y comunicacion con mysql como **dependencies** que significa dependencias de producion que son necesarias para el funcionamientro del proyecto.
    ```bash
    $  npm install express mysql
    ```
    **express:** Es un marco de aplicación web Node.js mínimo y flexible que proporciona un conjunto sólido de funciones para desarrollar aplicaciones web y móviles. Facilita el rápido desarrollo de aplicaciones web basadas en Node. Permite configurar middlewares para responder a solicitudes HTTP.
## 📡Servidor
1. Inicia el servidor creado en el archivo en mencion, toca prenderlo y apagarlo manualmente para que reconosca los cambios en el codigo.
    ```bash
    $  node src/index.js
    ```
2. Instala el modulo nodemon  **-D:** como **devDependencies** que significa depencencia de desarrollo que no son necesarias para el funcinamiento del proyecto.<
    ```bash
    $   npm install nodemon -D
    ```
    **nomdemo:** es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios de archivo en el directorio.

3. Inicia el servidor creado en el archivo en mencion con nodemon.
    ```bash
    $  npm run  dev
    ```
    **("dev": "nodemon src/index.js")** se inicializa en el scripts del archivo **package.json** para que el comando lo reconosca.


## 📁REST-API-CINE-CRUD
- 📁db
    - db.sql 
- 📁node_modules
- 📁src
    - 📁routes
        - clientes.js
    - databse.js
    - index.js
- package-lock.json
- package.json

## Autores ✒️
* [Robinson Rojas](https://github.com/villanuevand)
* [Jhon villamil](#fulanito-de-tal)

###### 🌐Basado en la guia de Fazt
- [Nodejs y Mysql Rest API](https://www.youtube.com/watch?v=p8CoR-wymQg&ab_channel=Fazt/)

