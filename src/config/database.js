const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/performanceDB';
    await mongoose.connect(mongoURI);
    console.log('MongoDB conectado exitosamente');

    mongoose.connection.on('connected', () => {
      console.log('Mongoose está conectado a MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Error en la conexión de Mongoose:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose se ha desconectado');
    });

  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;