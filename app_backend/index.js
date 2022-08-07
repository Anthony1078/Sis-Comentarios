const express = require('express');
const conectarBD = require('./config/db');
const cors = require('cors');

const app = express(); //Servidor

conectarBD(); // Conexion con la base de datos

app.use(express.json());
app.use(cors());
app.use('/api/comentarios', require('./routes/comentario'));

app.listen(5000, () => {
    console.log('El servidor se ha iniciado en el puerto 5000');
})