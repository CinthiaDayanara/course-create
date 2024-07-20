const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courseRoutes');
const app = express();
const port = 5006;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/courses_db', {
 
});

// Middleware para JSON
app.use(express.json());

// Rutas
app.use('/', courseRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
