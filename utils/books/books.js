const { nanoid } = require('nanoid');

// array books for save the books
const books = [
    {
        id: nanoid(16),
        name: "Mastering Node.js",
        year: 2022,
        author: "Ryan Dahl",
        summary: "Panduan lengkap untuk menguasai Node.js dan membangun aplikasi backend.",
        publisher: "Code World",
        pageCount: 320,
        readPage: 320,
        finished: true,
        reading: false,
        insertedAt: "2025-03-30T11:00:00.000Z",
        updatedAt: "2025-03-30T11:00:00.000Z"
    },
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