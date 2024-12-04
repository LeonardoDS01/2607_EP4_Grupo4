const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombres: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  telefono: { type: String, required: true },
  dni: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Cliente', clienteSchema);
