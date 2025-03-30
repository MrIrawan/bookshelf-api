const routes = [
    {method: 'GET', path: '/books'},
    {method: 'GET', path: '/books/{bookID}'},
    {method: 'POST', path: '/books'},
    {method: 'PUT', path: '/books/{bookID}'},
    {method: 'DELETE', path: '/books/{bookID}'},
]

module.exports = routes