const books = require('../books/books');
const filterSchema = require('../books/filterSchma');

const getAllBooks = (req, handler) => {
    const filteredBooks = books.map(({ id, name, publisher }) => ({ id, name, publisher }));

    const response = handler.response({
        status: 'Success get all books',
        code: 200,
        data: {
            books: books ? filteredBooks : [],
        },
    }).code(200);

    return response;
}

const addBook = (req, handler) => {
    const {
        name, 
        year, 
        author, 
        summary, 
        publisher, 
        pageCount, 
        readPage, 
        reading
    } = req.payload;

    if (!name && !publisher) {
        return handler.response({
            status: 'fail',
            code: 400,
            message: 'Gagal menambahkan buku. Mohon isi nama buku dan penerbit',
        }).code(400);
    }

    if (readPage > pageCount) {
        return handler.response({
            status: 'fail',
            code: 400,
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        }).code(400);
    }

    const newBook = { name, year, author, summary, publisher, pageCount, readPage, reading };
    const bookSchema = filterSchema(newBook);

    const response = handler.response({
        status: 'Success add book',
        code: 201,
        data: {
            bookId: bookSchema,
        },
    })

    return response;
}

module.exports = { getAllBooks, addBook };