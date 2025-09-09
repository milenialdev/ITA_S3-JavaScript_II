// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((film) => film.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter((movie) => movie.director === director)
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = array.filter((movie) => movie.director === director);
  if (directorMovies.length === 0) return 0;
  let totalScore = directorMovies.reduce((acc, movie) => acc + (movie.score), 0);
  let averageScore = parseFloat((totalScore / directorMovies.length).toFixed(2));
  return averageScore;  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  return array
    .map(movie => movie.title)
    .toSorted()
    .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
   return array
    .toSorted((a,b) =>
      a.year !== b.year
        ? a.year - b.year
        : a.title.localeCompare(b.title)
    );   
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let genreMovies = array.filter((movie) => movie.genre.includes(genre));
  if (genreMovies.length === 0) return 0;
  let totalScore = genreMovies.reduce((acc, movie) => acc + (movie.score), 0);
  let averageScore = parseFloat((totalScore / genreMovies.length).toFixed(2));
  return averageScore;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map((movie) => {
    let duration = 0;
    if(movie.duration.includes('h')){
      duration += parseInt(movie.duration.split(' ').find(part => part.includes('h'))) * 60;
    }
    if (movie.duration.includes('min')) {
      duration += parseInt(movie.duration.split(' ').find(part => part.includes('min')));
    }
    return { ...movie, duration};
  })
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const moviesOfYear = array.filter(movie => movie.year === year);
  if (moviesOfYear.length === 0) return [];
  const best = moviesOfYear.reduce((bestMovie, current) =>
    current.score > bestMovie.score ? current : bestMovie
  );
  return [best];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
