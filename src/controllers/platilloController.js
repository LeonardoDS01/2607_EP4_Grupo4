const Platillo = require("../models/platilloModel");

// Crear un nuevo plato
exports.createPlatillo = async (req, res) => {
  try {
    const { nombre, ingredientes, precio, imagen } = req.body;
    const platillo = new Platillo({ nombre, ingredientes, precio, imagen });
    await platillo.save();
    res.status(201).json(platillo);
  } catch (err) {
    res.status(500).json({ message: "Error al crear plato", error: err });
  }
};

// Obtener un plato por ID
exports.getPlatilloById = async (req, res) => {
  try {
    const platillo = await Platillo.findById(req.params.id);
    if (!platillo)
      return res.status(404).json({ message: "Plato no encontrado" });
    res.status(200).json(platillo);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener plato", error: err });
  }
};

// Actualizar un plato
exports.updatePlatillo = async (req, res) => {
  try {
    const platillo = await Platillo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!platillo)
      return res.status(404).json({ message: "Plato no encontrado" });
    res.status(200).json(platillo);
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar plato", error: err });
  }
};

// Eliminar un plato
exports.deletePlatillo = async (req, res) => {
  try {
    const platillo = await Platillo.findByIdAndDelete(req.params.id);
    if (!platillo)
      return res.status(404).json({ message: "Plato no encontrado" });
    res.status(200).json({ message: "Plato eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar plato", error: err });
  }
};
