const express = require("express");
const router = express.Router();
const ordenController = require('../controllers/ordeneController');

router.post('/ordenes', ordenController.createOrden);
router.get('/ordenes/mesa/:mesaId', ordenController.getOrdenByMesaId);
router.put('/ordenes/:id', ordenController.updateOrdenEstado);
router.delete('/ordenes/:id', ordenController.deleteOrden);

module.exports = router;
