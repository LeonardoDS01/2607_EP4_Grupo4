const Mesero = require("../models/meseroModel");

// Registrar un nuevo mesero
exports.createMesero = async (req, res) => {
    console.log('Datos recibidos:', req.body);
    try {
        const { nombres, correo, telefono, dni } = req.body;
        const mesero = new Mesero({ nombres, correo, telefono, dni, estado:"1"});
        await mesero.save();
        res.status(201).json(mesero);
    } catch (err) {
        console.error("Error al registrar mesero:", err);
        res.status(500).json({ message: "Error al registrar mesero", error: err });
    }
};

// Obtener información de todos los meseros
exports.getAllMesero = async (req, res) => {
    try {
        // Obtener todos los meseros que estén activos
        // const mesero = await Mesero.find({ estado: "1" }); 

        // Obtener todos los meseros
        const mesero = await Mesero.find();
        if (!mesero || mesero.length === 0) {
            return res.status(404).json({ message: "No se encontraron meseros" });
        }
        res.status(200).json(mesero);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener meseros", error: err });
    }
};

// Actualizar información de un mesero
exports.updateMesero = async (req, res) => {
    try {
        const mesero = await Mesero.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!mesero)
            return res.status(404).json({ message: "Mesero no encontrado" });
        res.status(200).json(mesero);
    } catch (err) {
        res
            .status(500)
            .json({ message: "Error al actualizar mesero", error: err });
    }
};

// Eliminar un mesero (Eliminación lógica)
exports.deleteMesero = async (req, res) => {
    try {
        // Actualizar el estado del mesero a "0" (inactivo o eliminado)
        const mesero = await Mesero.findByIdAndUpdate(
            req.params.id,
            { estado: "0" },
            { new: true }
        );
        if (!mesero)
            return res.status(404).json({ message: "Mesero no encontrado" });
        res.status(200).json({ message: "Mesero eliminado correctamente (lógica)" });
    } catch (err) {
        res.status(500).json({ message: "Error al eliminar mesero", error: err });
    }
};
