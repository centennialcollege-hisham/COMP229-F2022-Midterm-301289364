// File Name - index.server.routes.js
// Student Name - Hisham Abu Sanimeh
// Student ID - 301289364
// App Name - Comp229 - Midterm
// Date - 23-06-2022

// modules required for routing
let express = require('express');
let router = express.Router();

const indexController = require('../controllers/index.server.controller')

/* GET home page. wildcard */
router.get('/', indexController.home);

module.exports = router;
