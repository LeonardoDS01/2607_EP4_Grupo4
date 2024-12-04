const Orden = require('../models/ordenModel');

// Crear una nueva orden
exports.createOrden = async (req, res) => {
    try {
        const { mesaId, platillos } = req.body;
        const orden = new Orden({ mesaId, platillos });
        await orden.save();
        res.status(201).json(orden);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear orden', error: err });
    }
};

// Obtener detalles de una orden por ID
//Consultar la información de una orden específica por el ID de la mesa.
exports.getOrdenByMesaId = async (req, res) => {
    try {
        const orden = await Orden.findOne({ mesaId: req.params.mesaId });
        if (!orden)
            return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json(orden);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener orden', error: err });
    }
};

// Actualizar el estado de una orden
// Modificar el estado de la orden (por ejemplo, de "pendiente" a "entregado" o "cancelado").
exports.updateOrdenEstado = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const estadosValidos = ['pendiente', 'entregado', 'cancelado'];
        if (!estadosValidos.includes(estado)) {
            return res.status(400).json({ message: "Estado inválido" });
        }

        const orden = await Orden.findByIdAndUpdate(id, { estado }, { new: true });
        if (!orden)
            return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json(orden);
    } catch (err) {
        res.status(500).json({ message: 'Error al actualizar orden', error: err });
    }
};

// Eliminar una orden
exports.deleteOrden = async (req, res) => {
    try {
        const orden = await Orden.findByIdAndDelete(req.params.id);
        if (!orden)
            return res.status(404).json({ message: 'Orden no encontrada' });
        res.status(200).json({ message: 'Orden eliminada correctamente' });
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar orden', error: err });
    }
};
