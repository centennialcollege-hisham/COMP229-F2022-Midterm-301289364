// modules required for routing
let express = require('express');
let router = express.Router();

const indexController = require('../controllers/index.server.controller')

/* GET home page. wildcard */
router.get('/', indexController.home);

module.exports = router;
