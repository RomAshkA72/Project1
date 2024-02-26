let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы смотрели", "");
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы смотрели", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function countWatchingFilms(){
    if(personalMovieDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert("Вы классический зритель");
    } else if(personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

countWatchingFilms();

function gradeWatchingFilms(){
    for( let i = 0; i < 2; i++){

        let lastFilmWatching = prompt("Один из последних просмотренных фильмов", "").trim;
        let grade = prompt("На сколько его оцените", "");
        if( lastFilmWatching == ' ' || grade === ' ' || lastFilmWatching === null || grade === null || lastFilmWatching.length > 50){
            i--;
        } else {
            personalMovieDB.movies[lastFilmWatching] = grade;
        }
    }
}

gradeWatchingFilms();

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
    let kol = 3;
    for(let i = 1; i <= kol; i++){
        let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();
