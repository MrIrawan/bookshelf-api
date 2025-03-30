const nanoid = require('nanoid');
const books = require('../books/books');

const getAllBooks = (request, handler) => {
    const filteredBooks = books.map(({ id, name, publisher }) => ({ id, name, publisher }));

    return handler.response({
        status: 'success',
        data: {
            books: filteredBooks,
        },
    }).code(200);
}