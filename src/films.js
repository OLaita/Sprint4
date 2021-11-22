
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(array => array.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result = array.filter(array => array.director == director);
  return result;
 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  let filtro = getMoviesFromDirector(array,director);
  let mapa = filtro.map(filtro => filtro.score);
  let result = mapa.reduce((pri, pos) => pri + pos);
  let total = result / filtro.length;
  
  return parseFloat(total.toFixed(2));
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let res = array.map(resu => resu.title);
  let result = res.sort((a, b) => a.localeCompare(b)).slice(0, 20);

  return result;
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  // array.sort((a, b) => a.title.localeCompare(b.title));
  let orderTitle = array.sort((a, b) => a.title < b.title ? -1 : (a.title > b.title ? 1 : 0))
  let orderYear = orderTitle.sort((a, b) => a.year - b.year);
  
  return orderYear;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, gen) {

  // gen = gen.charAt(0).toUpperCase() + gen.slice(1);

  let filtro = [];

  array.filter(movie => movie.genre.filter((mg, i) => {
    if(mg == gen){
      filtro.push(movie);
    }
  }));

  let mapa = filtro.map(fil => fil.score == null ? fil.score = 0 : fil.score == "" ? fil.score = 0 : parseInt(fil.score));
  let result = mapa.reduce((pri, pos) => parseInt(pri) + parseInt(pos));
  let i = mapa.filter(a => a == 0).length;
  let total = result / (filtro.length-i);

  return parseFloat(total.toFixed(2));

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  let res = [];
  let totalmin;

  array.map(function(movie){
    let h = movie.duration.toString().slice(0, 1);
    h = h * 60;
    if(movie.duration.length <= 2){
      totalmin = h;
    }else{
      totalmin = parseInt(movie.duration.toString().slice(2, -3)) + h;
    }
    movie.duration = parseInt(totalmin);
    res.push(movie);
  });

  return res;

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let p = [];

  array.map(function(movie){
    if(movie.year == year){
      p.push(movie);
    }
  });

  let orderScore = p.sort((a, b) => a.score + b.score);
  let o = [];
  o.push(orderScore[0]);

  return o;
  
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
