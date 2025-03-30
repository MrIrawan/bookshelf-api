const { getAllBooks } = require('./handler/handler');

const routes = [
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks
    }
]

module.exports = routes