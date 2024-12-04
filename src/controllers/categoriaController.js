const Categoria = require('../models/categoriaModel');

// Crear una nueva categoría
exports.createCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        const nuevaCategoria = new Categoria({ nombre, descripcion });
        await nuevaCategoria.save();

        res.status(201).json(nuevaCategoria);
    } catch (err) {
        console.error("Error al crear categoría:", err);
        if (err.code === 11000) {
            // Manejo de error por nombre duplicado
            res.status(400).json({ message: "El nombre de la categoría ya existe", error: err });
        } else {
            res.status(500).json({ message: "Error al crear categoría", error: err });
        }
    }
};

// Obtener todas las categorías
exports.getAllCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (err) {
        console.error("Error al obtener categorías:", err);
        res.status(500).json({ message: "Error al obtener categorías", error: err });
    }
};

// Actualizar una categoría
exports.updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        const categoriaActualizada = await Categoria.findByIdAndUpdate(
            id,
            { nombre, descripcion },
            { new: true }
        );

        if (!categoriaActualizada) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        res.status(200).json(categoriaActualizada);
    } catch (err) {
        console.error("Error al actualizar categoría:", err);
        if (err.code === 11000) {
            res.status(400).json({ message: "El nombre de la categoría ya existe", error: err });
        } else {
            res.status(500).json({ message: "Error al actualizar categoría", error: err });
        }
    }
};

// Eliminar una categoría
exports.deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;

        const categoriaEliminada = await Categoria.findByIdAndDelete(id);

        if (!categoriaEliminada) {
            return res.status(404).json({ message: "Categoría no encontrada" });
        }

        res.status(200).json({ message: "Categoría eliminada correctamente" });
    } catch (err) {
        console.error("Error al eliminar categoría:", err);
        res.status(500).json({ message: "Error al eliminar categoría", error: err });
    }
};
