// modules required for routing
let express = require('express');

module.exports.home = (req, res, next) => {
    res.render('content/index', {
        title: 'Home',
        books: ''
    });
}


