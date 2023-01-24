const express = require("express");
const router = express.Router();
const wiki_controller = require ('../Controller/wiki');

// Home page route.
router.get("/", wiki_controller.home);

// About page route.
router.get("/about", wiki_controller.about);
module.exports = router;