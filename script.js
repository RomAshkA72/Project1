let numberOfFilms = +prompt("Сколько фильмов вы смотрели", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(personalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    alert("Вы классический зритель");
} else if(personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

for( let i = 0; i < 2; i++){

    let lastFilmWatching = prompt("Один из последних просмотренных фильмов", "");
    let grade = prompt("На сколько его оцените", "");
    if( lastFilmWatching == ' ' || grade === ' ' || lastFilmWatching === null || grade === null || lastFilmWatching.length > 50){
        i--;
    } else {
        personalMovieDB.movies[lastFilmWatching] = grade;
    }
}

console.log(personalMovieDB);