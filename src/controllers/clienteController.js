const Cliente = require("../models/clienteModel");

// Registrar un nuevo cliente
exports.createCliente = async (req, res) => {
  console.log('Datos recibidos:', req.body);
  try {
    const { nombres, correo, telefono, dni } = req.body;
    const cliente = new Cliente({ nombres, correo, telefono, dni });
    await cliente.save();
    res.status(201).json(cliente);
  } catch (err) {
    console.error("Error al registrar cliente:", err);
    res.status(500).json({ message: "Error al registrar cliente", error: err });
  }
};

// Obtener información de un cliente por ID
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente)
      return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener cliente", error: err });
  }
};

// Actualizar información de un cliente
exports.updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!cliente)
      return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json(cliente);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al actualizar cliente", error: err });
  }
};

// Eliminar un cliente
exports.deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!cliente)
      return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json({ message: "Cliente eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar cliente", error: err });
  }
};
