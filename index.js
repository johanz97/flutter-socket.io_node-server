//Importar extensiones
const express = require('express');
const path = require('path');
//Leyendo el .env
require('dotenv').config();

//Crear aplicacion de express
const app = express();

//Node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

//Path publico
const publicPath = path.resolve(__dirname, 'public');

//Usar publicPath
app.use(express.static(publicPath));

//Montar el servidor 
server.listen(process.env.PORT, (err) => {

    if (err) throw new Error(err);

    console.log('Servidor corriendo en puerto:', process.env.PORT);
});