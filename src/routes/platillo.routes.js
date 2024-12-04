const express = require('express');
const router = express.Router();
const platilloController = require('../controllers/platilloController');

router.post('/plato', platilloController.createPlatillo);
router.get('/plato/:id', platilloController.getPlatilloById);
router.put('/plato/:id', platilloController.updatePlatillo);
router.delete('/plato/:id', platilloController.deletePlatillo);

module.exports = router;