const { nanoid } = require('nanoid');
const books = require('./books');

const filterSchema = (book) => {
    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = book.pageCount === book.readPage;

    const bookSchema = {
        id: id,
        name: book.name,
        year: book.year,
        author: book.author,
        summary: book.summary,
        publisher: book.publisher,
        pageCount: book.pageCount,
        readPage: book.readPage,
        finished: finished,
        reading: book.reading,
        insertedAt: insertedAt,
        updatedAt: updatedAt
    }

    books.push(bookSchema);

    return bookSchema.id;
}

module.exports = filterSchema;