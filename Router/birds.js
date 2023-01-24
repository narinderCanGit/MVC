const express = require("express");
const router = express.Router();
const birds_controller = require ('../Controller/birds');

// Home page route.
router.get("/", birds_controller.home);

// About page route.
router.get("/about", birds_controller.about);
module.exports = router;