# 📃Descripción
En este proyecto se desarrolla una API RES utilizando node.js y MySQL, donde tendremos una dirección de internet donde podemos pedir los datos que estén almacenados en la base de datos MySQL, añadir nuevos datos, actualizarlos y eliminarlos con los métodos GET, POST, PUT y DELETE. Que se pueden probar des de postman. 

## 🎬Video
[![Watch the video](https://i.imgur.com/HUHXqMw.png)](https://www.youtube.com/watch?v=MwPrhgxPcXg&ab_channel=JohnDannySteveVILLAMILGONZALEZ)

## 👨‍💻Tecnologías
- [Node.js](https://nodejs.org/es/)
 - [NPM](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/)
- [Postman](www.postman.com)


## ⚙Configuración inicial del proyecto
1. Inicializa un package.json donde está la configuración y descripción del proyecto.
    ```bash
    $  npm init --yes
    ```
2. Instala los módulos de node.js para la creación del servidor con express y comunicación con mysql como **dependencies** que significa dependencias de producción que son necesarias para el funcionamiento del proyecto.
    ```bash
    $  npm install express mysql
    ```
    **express:** Es un marco de aplicación web Node.js mínimo y flexible que proporciona un conjunto sólido de funciones para desarrollar aplicaciones web y móviles. Facilita el rápido desarrollo de aplicaciones web basadas en Node. Permite configurar middlewares para responder a solicitudes HTTP.
## 📡Servidor
1. Inicia el servidor creado en el archivo en mención, toca prenderlo y apagarlo manualmente para que reconozca los cambios en el código.
    ```bash
    $  node src/index.js
    ```
2. Instala el modulo nodemon  **-D:** como **devDependencies** que significa dependencia de desarrollo que no son necesarias para el funcionamiento del proyecto.<
    ```bash
    $   npm install nodemon -D
    ```
    **nomdemo:** es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios de archivo en el directorio.

3. Inicia el servidor creado en el archivo en mención con nodemon.
    ```bash
    $  npm run  dev
    ```
    **("dev": "nodemon src/index.js")** se inicializa en el scripts del archivo **package.json** para que el comando lo reconozca.


## 📁REST-API-CINE-CRUD
- 📁db
    - db.sql : Se crea la base de datos y los procedure.
- 📁node_modules : Módulos de node al instalar express.
- 📁src
    - 📁routes
        - clientes.js : se crean los métodos del CRUD.
    - databse.js : Conexión con la base de datos.
    - index.js : Configuracion de servidor, puertos, middleware y inicialización del servidor.
- package-lock.json : Módulos de node.
- package.json : Configuración de npm.

## Autores ✒️
* [Robinson Rojas](https://github.com/RobinsonRojas)
* [John Villamil](https://github.com/jdsvg)

###### 🌐Basado en la guía de Fazt
- [Nodejs y Mysql Rest API](https://www.youtube.com/watch?v=p8CoR-wymQg&ab_channel=Fazt/)

