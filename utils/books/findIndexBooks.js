const findIndexBooks = (id, books) => {
    for (const book of books) {
        if (book.id === id) {
            return book.id;
        } else {
            return false;
        }
    }
}

module.exports = { findIndexBooks };