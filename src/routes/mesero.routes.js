const express = require("express");
const router = express.Router();
const meseroController = require("../controllers/meseroController");

router.post("/mesero", meseroController.createMesero);
router.get("/mesero", meseroController.getAllMesero);
router.put("/mesero/:id", meseroController.updateMesero);
router.delete("/mesero/:id", meseroController.deleteMesero);

module.exports = router;
