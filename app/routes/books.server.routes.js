
// File Name - books.server.routes.js
// Student Name - Hisham Abu Sanimeh
// Student ID - 301289364
// App Name - Comp229 - Midterm
// Date - 23-06-2022

// modules required for routing
let express = require('express');
let router = express.Router();

// Connect to books Controller
const booksController = require('../controllers/books.server.controller')

/* GET books List page. READ */
router.get('/', booksController.displayBookList);

//  GET the Book Details page in order to add a new Book
router.get('/add', booksController.displayAddPage);

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', booksController.processAddPage);

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', booksController.displayEditPage);

// POST - process the information passed from the details form and update the document
router.post('/edit/:id', booksController.processEditPage);

// GET - process the delete by user id
router.get('/delete/:id', booksController.performDeleteBook);


module.exports = router;
