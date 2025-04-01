const { getAllBooks, addBook, updateBook, deleteBook } = require('./handler/handler');

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
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: updateBook
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBook
    },
]

module.exports = routes