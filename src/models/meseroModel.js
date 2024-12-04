const mongoose = require('mongoose');

const meseroSchema = new mongoose.Schema({
    nombres: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    dni: { type: String, required: true, unique: true },
    estado: { type: String, required: true}
});

module.exports = mongoose.model('Mesero', meseroSchema);
