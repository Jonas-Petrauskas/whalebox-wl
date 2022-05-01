const express = require("express");
const router = express.Router();

const controller = require("../controllers/controllers");

router.get("/address", controller.getAddress);
router.post("/address", controller.addAddress);
router.delete("/address/:id", controller.deleteAddress);

module.exports = router;
