// File Name - books.server.controller.js
// Student Name - Hisham Abu Sanimeh
// Student ID - 301289364
// App Name - Comp229 - Midterm
// Date - 23-06-2022

// define the book model
let book = require('../models/books');

/* GET books List page. READ */

module.exports.displayBookList = (req, res) => {
    // find all books in the books collection
    book.find((err, books) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('books/index', {
                title: 'Books',
                books: books
            });
        }
    });
}

//showing add page
module.exports.displayAddPage = (req, res) => {
    res.render('books/add', {title: 'Add Book'})
}

//processing the add page using module exports
module.exports.processAddPage = (req, res) => {

    let newBook = book({
        "title": req.body.title,
        "description": req.body.description,
        "price": req.body.price,
        "author": req.body.author,
        "genre": req.body.genre
    });


    book.create(newBook, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/books');
        }
    });

}

//showing edit page using module exports
module.exports.displayEditPage = (req, res) => {

    let id = req.params.id;

    book.findById(id, (err, bookToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            //show the edit view
            res.render('books/edit', {title: 'Edit Book', book: bookToEdit})
        }
    });

}

//processing the edit book
module.exports.processEditPage = (req, res) => {

    let id = req.params.id

    let updatedBook = book({
        "_id": id,
        "title": req.body.title,
        "description": req.body.description,
        "price": req.body.price,
        "author": req.body.author,
        "genre": req.body.genre
    });

    book.updateOne({_id: id}, updatedBook, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/books');
        }
    });

}

//performing the deletion of book
module.exports.performDeleteBook = (req, res) => {
    let id = req.params.id;

    book.remove({_id: id}, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/books');
        }
    });
}
