const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");

router.post("/cliente", clienteController.createCliente);
router.get("/cliente/:id", clienteController.getClienteById);
router.put("/cliente/:id", clienteController.updateCliente);
router.delete("/cliente/:id", clienteController.deleteCliente);

module.exports = router;
