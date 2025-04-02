const { nanoid } = require('nanoid');

// array books for save the books
const books = [
    {
        id: nanoid(16),
        name: "Mastering Hapi.js",
        year: 2025,
        author: "Dicoding Indonesia",
        summary: "Panduan lengkap untuk menguasai dan membuat web server menggunakan Hapi.js",
        publisher: "Coding Camp 2025",
        pageCount: 300,
        readPage: 250,
        finished: false,
        reading: false,
        insertedAt: "2025-03-30T11:00:00.000Z",
        updatedAt: "2025-03-30T11:00:00.000Z"
    },
];

module.exports = books;