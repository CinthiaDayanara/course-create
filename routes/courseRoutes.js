const express = require('express');
const router = express.Router();
const Course = require('../models/course'); // Asegúrate de que la ruta al modelo sea correcta

// Ruta para crear un nuevo curso
router.post('/api/courses', async (req, res) => {
  try {
    const { title, description, duration } = req.body;

    // Crear un nuevo curso
    const newCourse = new Course({
      title,
      description,
      duration
    });

    // Guardar el curso en la base de datos
    await newCourse.save();

    res.status(201).json({
      message: 'Curso creado exitosamente',
      course: newCourse
    });
  } catch (error) {
    res.status(500).json({
      error: 'Error al crear el curso',
      details: error.message
    });
  }
});

module.exports = router;
