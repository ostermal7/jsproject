const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function  () {
        personalMovieDB.count = +prompt('Скок фильмов', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скок фильмов', '');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonLevel: function () {
        if (personalMovieDB.count < 10){
            console.log('мало');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('norm');
        }else {
            console.log('error');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function  () {
        for (let i = 1; i <= 3; i++){
           let genre = prompt(`Your fav genre with number ${i}?`, '');

            if (genre === '' || genre == null){
                console.log('You inserted wrong data or didnt inserted anything');
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private){
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};
