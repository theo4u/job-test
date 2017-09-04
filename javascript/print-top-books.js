/**
 * Created by theophy on 04/09/2017.
 *
 *
 * exposes a function to find the top three books with the highest ratings, and
 * returns the contents of these books as an array of objects.
 *  module expose ONLY one public function.
 */
const books = require('./books');
let ratings = require('./ratings');

module.exports = function () {
    return ratings(books).getTopBooks(3);
};