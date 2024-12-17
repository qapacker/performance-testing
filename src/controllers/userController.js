const mongoose = require('mongoose');
const User = require('../models/userModels.js');

// Función para generar usuarios dummy
const generateUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      name: `User${i}`,
      email: `user${i}@example.com`,
      age: Math.floor(Math.random() * 60) + 18, // Edad aleatoria entre 18 y 77
    });
  }
  return users;
};

// Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.find().limit(100); // Limitar a 100 para evitar sobrecarga
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
};

// Crear usuarios dummy
const createUsers = async (req, res) => {
  let { count = 1000 } = req.query;
  count = parseInt(count);

  if (isNaN(count) || count <= 0) {
    return res.status(400).json({ message: 'El parámetro "count" debe ser un número positivo' });
  }

  try {
    // Generar los usuarios dummy
    const dummyUsers = generateUsers(count);  // Generar los usuarios directamente aquí
    console.log('Usuarios generados:', dummyUsers);

    // Insertar los usuarios generados en la base de datos
    await User.insertMany(dummyUsers);
    res.status(201).json({ message: `${count} usuarios creados con éxito` });
  } catch (error) {
    console.error('Error al crear usuarios dummy:', error);
    if (error.code === 11000) {
      res.status(400).json({ message: 'Algunos correos electrónicos ya existen', error });
    } else {
      res.status(500).json({ message: 'Error al crear usuarios dummy', error: error.message });
    }
  }
};

// Eliminar todos los usuarios
const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ message: 'Todos los usuarios han sido eliminados' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar usuarios', error });
  }
};

module.exports = {
  getUsers,
  createUsers,  // Exportar la función correctamente
  deleteAllUsers,
};
