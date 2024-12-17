// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database.js');
const userRoutes = require('./routes/userRoutes.js');
const dotenv = require('dotenv');

// Configurar variables de entorno
dotenv.config();

// Crear instancia de Express
const app = express();

// Middleware para parsear JSON
app.use(bodyParser.json());

// Conectar a MongoDB
connectDB();

// Configurar rutas
app.use('/api', userRoutes);

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('API de Rendimiento con Node.js, Express y MongoDB está funcionando');
});

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Puerto de la aplicación
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});