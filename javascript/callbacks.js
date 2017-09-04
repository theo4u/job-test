const books = require('./books');
let fetchBookByAuthors = require('./fetch-books-by-authors');
let ratings = require('./ratings');

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

// testing fetch book by author .js
const getBooksByAuthor = (author, callback) => {
    return callback(fetchBookByAuthors(author));
};

// processing ratings.js
let Rating = ratings(books);
const getTopBooks = (n, callback) => {
    return callback(Rating.getTopBooks(n));
};
const getTopAuthors = (n, callback) => {
    return callback(Rating.getTopAuthors(n));
};


//getBooksAsync(sortBooksAlphabetically);

getBooksByAuthor('George Orwell', print);
getTopBooks(5, print);
getTopAuthors(5, print);