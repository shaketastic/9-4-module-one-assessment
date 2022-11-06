/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
// guard clause : if empty, return []
// define/set default variable as array []
// loop thru array of 'movies'
// IF a 'title' is present in any of the elements of movies, PUSH it

function getAllMovieTitles(movies) {

  if(!movies.length) {
    return [];
  }
  let getAllMovies = []; 

  for (let movie of movies) {   
    getAllMovies.push(movie.title)  
  }
  return getAllMovies;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
// guard clause : if empty, return 0
// set start value to compare with : movie[i].metascore
// loop thru, IF start value is less than other elements metascore ->
// reassign it to the elements metascore
// return in 'Number' format

function getHighestMetascore(movies) {

  if(!movies.length) {
    return 0;
  }
  let highestMetascore = 0;

  for (let i = 0; i < movies.length; i++) {
    if(movies[i].metascore > highestMetascore) {
    highestMetascore = movies[i].metascore
    }
  }
  return Number(highestMetascore);
}
console.log(getHighestMetascore(exampleMovies, 96));

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
// guard clause : if empty, return 0
// declare default variable, set to 0 -> accumulate 'total'
// add up movie.imdbrating && re-assign the 'total' variable 

function getAverageIMDBRating(movies) {

  if(movies.length === 0) {
    return 0;
  }
  let avgTotal = 0;

  for (let movie of movies) {
    avgTotal += Number(movie.imdbRating);
  }
  return avgTotal / movies.length;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
// if movies.length empty, return 0
// Define default value
// Loop thru array of movies (movie - each element) 
// IF movie.rated = true -> increment, if false movie.rated = 1

function countByRating(movies) {

  let countOfRatings = {};

  for (let i = 0; i < movies.length; i++){
    if(!countOfRatings[movies[i].rated]){
      countOfRatings[movies[i].rated] = 1;
    }else {
      countOfRatings[movies[i].rated] += 1;
    }
  }
  return countOfRatings;
}
console.log(countByRating(exampleMovies, "R"));

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
// guard clause (return null), define value, loop thru
// return movie.title if parameter 'id' matches w/ movie.imdbID
// EX: movies.title: "Toy Story 4" === movie.imdbID: "tt1979376" -> id param

function findById(movies, id) {

  if(movies.length === 0){
    return null;
  }
  let findTargetID = {};

  for (let target of movies) {
    if(target.imdbID === id) {
    target = findTargetID;
    return target;
    }
  }
  return null;
}
console.log(findById(exampleMovies, "tt3606756"));

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
 if(movies.length === 0) {
  return [];

 let 
 }


  return [];
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear() {}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie() {}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
