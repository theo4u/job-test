/**
 * Created by theophy on 04/09/2017.
 *
 * this is used to filter books which belongs to a particular author
 */
const books = require("./books");

/**
 * This gives the books which the book.author is same as the author argument
 * @param author {string}
 * @return []
 */
module.exports = (author) => {
    return books.filter(book => book.author === author);
};


