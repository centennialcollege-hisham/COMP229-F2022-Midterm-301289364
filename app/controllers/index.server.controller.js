// File Name - index.server.controller.js
// Student Name - Hisham Abu Sanimeh
// Student ID - 301289364
// App Name - Comp229 - Midterm
// Date - 23-06-2022

module.exports.home = (req, res) => {
    res.render('content/index', {
        title: 'Home',
        books: ''
    });
}


