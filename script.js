let numberOfFilms = +prompt("Сколько фильмов вы смотрели", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilmWatching = prompt("Один из последних просмотренных фильмов", "");
let grade = prompt("На сколько его оцените", "");

personalMovieDB.movies[lastFilmWatching] = grade;

console.log(personalMovieDB);