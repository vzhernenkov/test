let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genders: [],
  privat: false,
};

let filmName1 = prompt('Какой фильм вы посмотрели?')
let filmScore1 = prompt('На сколько оцените его?')
let filmName2 = prompt('Какой фильм вы посмотрели?')
let filmScore2 = prompt('На сколько оцените его?')

personalMovieDB.movies[`${filmName1}`] = filmScore1;
personalMovieDB.movies[`${filmName2}`] = filmScore2;

console.log(personalMovieDB);