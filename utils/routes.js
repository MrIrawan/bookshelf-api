const { getAllBooks, addBook } = require('./handler/handler');

const routes = [
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks
    },
    {
        method: 'POST',
        path: '/books',
        handler: addBook
    },
]

module.exports = routes