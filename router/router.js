const express = require("express");
const router = express.Router();
const categoria = require("../controller/categoria");

router.post("/criar/categoria", categoria.create);
router.get("/listar/categoria/:page", categoria.findALl);
router.put("/atualizar/categoria/:id", categoria.update);

module.exports = router;
