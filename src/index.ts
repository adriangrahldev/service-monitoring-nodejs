import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Rutas de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Conexión a la base de datos
require('./config/db.config');

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});