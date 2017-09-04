const books = require('./books');
let fetchBookByAuthors = require('./fetch-books-by-authors');
let ratings = require('./ratings');
let topBooks = require('./print-top-books');

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

//getBooksAsync(sortBooksAlphabetically);

let Rating = ratings(books);
print(fetchBookByAuthors('George Orwell'));
print(Rating.getTopBooks(5));
print(Rating.getTopAuthors(5));
print(topBooks());