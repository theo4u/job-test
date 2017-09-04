/**
 * Created by theophy on 04/09/2017.
 *
 * a module named  Ratings  which accepts a collection of books, orders the
 * books by ratings; Highest ratings first, lowest ratings last. This module should then expose
 * two public functions; (1) getTopBooks: Accepts an integer nth  and returns the first nth books in the
 * sorted collection.  (2) getTopAuthors: accepts an integer nth and returns an Array of objects with name
 * of author as keys and their average ratings as values.
 */

/**
 * this takes in the books and then sort it based on the sort other
 * @param books array
 * @param sort_order {'ASC'|'DESC'} default it takes highest to lowest which is 'DESC'
 * @return {{getTopBooks: (function()), getTopAuthors: (function())}}
 */
module.exports = (books, sort_order) => {
    sort_order = sort_order || 'DESC'; //use DESC as our default sorting order

    let sortedBooks = books.sort((book1, book2) => {
        return sort_order === 'DESC' ? (book2.ratings - book1.ratings) : (book1.ratings - book2.ratings);
    });

    return {
        /**
         * Accepts an integer nth  and returns the first nth books in the sorted collection
         * @param n
         * @return {Array}
         */
        getTopBooks: (n) => {
            return sortedBooks.slice(0, n);
        },
        /**
         * accepts an integer nth and returns an Array of objects with name of author
         * as keys and their average ratings as values
         *
         * it first of all get the nth sorted books and then check for each author to calculate their
         * average rating
         *
         * @param n
         * @return {{}}
         */
        getTopAuthors: (n) => {
            return {};
        }
    }
};