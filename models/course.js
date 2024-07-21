const mongoose = require('mongoose');

// Definir el esquema del curso
const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // El título es obligatorio
  },
  description: {
    type: String,
    required: true,  // La descripción es obligatoria
  },
  duration: {
    type: Number,
    required: true,  // La duración es obligatoria
  },
});

// Exportar el modelo basado en el esquema
module.exports = mongoose.model('Course', CourseSchema);
