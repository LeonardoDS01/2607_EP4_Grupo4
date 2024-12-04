const express = require("express");
const conectarDB = require("./database/db");
const cors = require("cors");
const dotenv = require("dotenv");

//Routes
const platilloRoutes = require("./routes/platillo.routes");
const clienteRoutes = require("./routes/cliente.routes");
const meseroRoutes = require("./routes/mesero.routes");
const ordenRoutes = require("./routes/orden.routes");
const categoriaRoutes = require("./routes/categoria.routes");

dotenv.config(); // Cargar variables de entorno

const app = express();
app.use(cors());
app.use(express.json()); // Permite analizar JSON en el cuerpo de las solicitudes
// Middleware para manejar errores de parsing JSON
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error(err);
    return res.status(400).json({ message: "JSON inválido en el cuerpo de la solicitud" });
  }
  next();
});

// Conectar a MongoDB
conectarDB();


// Rutas
app.use("/api/v1", platilloRoutes);
app.use("/api/v1", clienteRoutes);
app.use("/api/v1", meseroRoutes);
app.use("/api/v1", ordenRoutes);
app.use("/api/v1", categoriaRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto  http://localhost:${PORT}`);
});
