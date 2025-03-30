const nanoid = require('nanoid');
const books = require('../books/books');

const getAllBooks = (req, handler) => {
    const filteredBooks = books.map(({ id, name, publisher }) => ({ id, name, publisher }));

    const response = handler.response({
        message: 'Success get all books',
        status: 201,
        data: {
            books: filteredBooks,
        },
    }).code(201);

    return response;
}

module.exports = { getAllBooks };