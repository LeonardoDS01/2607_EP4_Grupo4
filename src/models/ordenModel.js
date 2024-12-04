const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
    mesaId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Mesa' },
    platillos: [
        {
            platilloId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Platillo' },
            cantidad: { type: Number, required: true },
        },
    ],
    estado: { type: String, enum: ['pendiente', 'entregado', 'cancelado'], default: 'pendiente' },
}, { timestamps: true });

module.exports = mongoose.model('Orden', ordenSchema);
