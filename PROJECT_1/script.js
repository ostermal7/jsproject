let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Скок фильмов', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скок фильмов', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let index = 0; index < 2; index++) {
        const firstQuestion = prompt('One of the last watched films', '');
        const rateFilm = prompt('Rate this film', '');
    
        if (firstQuestion != '' || firstQuestion.length < 50 || firstQuestion != null || 
            rateFilm != '' || rateFilm.length < 50 || rateFilm != null){
                personalMovieDB.movies[firstQuestion] = rateFilm;
        } else {
           index--;
        }
    }
}

rememberMyFilms();



function detectPersonLevel() {
    if (personalMovieDB.count < 10){
        console.log('мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('norm');
    }else {
        console.log('error');
    }
}

detectPersonLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Your fav genre with number ${i}?`, '');
    }
}

writeYourGenres();
console.log(personalMovieDB);
