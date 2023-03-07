

let numberOfFilms;


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false,
  };

let questions = {
  whatFilm: 'Какой фильм вы посмотрели?',
  scoreFilm: 'На сколько оцените его?',
}

if (personalMovieDB['count'] < 10) {
  console.log('Вы посмотрели довольно мало фильмов');
} else if (personalMovieDB['count'] >= 10 && personalMovieDB['count'] <= 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB['count'] > 30) {
  console.log('Вы киноман');
}


asker: for (let i = 0; i < 2; i++) {
  let filmName = prompt(questions.whatFilm);
  
  if (filmName.length >= 50 || filmName.length == 0) {
    console.log ('Ошибка, повторите ввод');
    i --;
    continue;
  }
  let filmScore = prompt(questions.scoreFilm);

  personalMovieDB.movies[filmName] = filmScore;
}

function start () {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
}

console.log(personalMovieDB);