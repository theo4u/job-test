const books = require('./books');
let fetchBookByAuthors = require('./fetch-books-by-authors');

const print = result => console.log('Result:', result);

const filterBooksWithTitleStartingWithA = (sortedBooks, callback) => {
    let filteredBooks;
    /* filter logic here */
    return callback(filteredBooks)
};

const sortBooksAlphabetically = (books, callback) => {
    let sortedBooks;
    /* sorting logic books */
    return callback(sortedBooks, print)
};

const getBooksAsync = (callback) => {
    setTimeout(() => {
        callback(books, filterBooksWithTitleStartingWithA)
    }, 2000)
};

const getBooksByAuthor = (author, callback) => {
    return callback(fetchBookByAuthors(author));
};

//getBooksAsync(sortBooksAlphabetically);

getBooksByAuthor('George Orwell', print);
