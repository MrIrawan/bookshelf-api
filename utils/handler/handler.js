const { nanoid } = require('nanoid');
const { findIndexBooks } = require('../books/findIndexBooks');
const books = require('../books/books');

const getAllBooks = (req, handler) => {
    const filteredBooks = books.map(({ id, name, publisher }) => ({ id, name, publisher }));

    const response = handler.response({
        status: 'success',
        data: {
            books: books ? filteredBooks : [],
        },
    }).code(200);

    return response;
}

const getDetailBook = (req, handler) => {
    const { bookId } = req.params;
    const book = books.find((book) => book.id === bookId);

    if (!book) {
        return handler.response({
            status: 'fail',
            message: 'Buku tidak ditemukan',
        }).code(404);
    }

    const response = handler.response({
        status: 'success',
        data: {
            book
        }
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

    if (!name) {
        return handler.response({
            status: 'fail',
            code: 400,
            message: 'Gagal menambahkan buku. Mohon isi nama buku',
        }).code(400);
    }

    if (!publisher) {
        return handler.response({
            status: 'fail',
            code: 400,
            message: 'Gagal menambahkan buku. Mohon isi penerbit buku.',
        }).code(400);
    }

    if (readPage > pageCount) {
        return handler.response({
            status: 'fail',
            code: 400,
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        }).code(400);
    }

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;

    const newBook = { id, name, year, author, summary, publisher, pageCount, readPage, finished, reading, insertedAt, updatedAt };
    books.push(newBook);

    const response = handler.response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
            bookId: id,
        }
    }).code(201);

    return response;
}

const updateBook = (req, handler) => {
    const { id } = req.params;
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

    const bookIndex = books.findIndex((book) => book.id === id);

    if (bookIndex === -1) {
        return handler.response({
            status: 'fail',
            code: 404,
            message: 'Gagal memperbarui buku. Id tidak ditemukan',
        }.code(404));
    }
    
    if (!name && !publisher) {
        return handler.response({
            status: 'fail',
            code: 400,
            message: 'Gagal memperbarui buku. Mohon isi nama buku dan penerbit',
        }.code(400));
    }

    if (readPage > pageCount) {
        return handler.response({
            status: 'fail',
            code: 400,
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        }.code(400));
    }

    books[bookIndex] = {
        ...books[bookIndex],
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        finished: pageCount === readPage,
        updatedAt: new Date().toISOString()
    };

    const response = handler.response({
        status: 'success',
        message: 'Buku berhasil diperbarui'
    }).code(200);

    return response;

}

const deleteBook = (req, handler) => {
    const { id } = req.params;
    const bookIndex = findIndexBooks(id, books);

    if (bookIndex === false) {
        return handler.response({
            status: 'fail',
            message: 'Buku gagal dihapus. Id tidak ditemukan'
        }).code(404);
    }


    books.splice(bookIndex, 1);

    const response = handler.response({
        status: 'success',
        message: 'Buku berhasil dihapus'
    }).code(200);

    return response;
}

module.exports = { getAllBooks, getDetailBook, addBook, updateBook, deleteBook };