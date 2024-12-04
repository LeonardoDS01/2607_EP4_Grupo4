const mongoose = require('mongoose');

const platilloSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ingredientes: { type: [String], required: true },
  precio: { type: Number, required: true },
  imagen: { type: String }  // URL o path de la imagen
});

module.exports = mongoose.model('Platillo', platilloSchema);
