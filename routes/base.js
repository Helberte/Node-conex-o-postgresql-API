const express = require('express');
const router = express.Router();
const controller = require('../controllers/routes_controllers');


router.get('/getgenero', controller.getGenero);


module.exports = router;