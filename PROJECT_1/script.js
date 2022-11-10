const numberOfFilms = prompt('Скок фильмов', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let index = 0; index < 2; index++) {
    const firstQuestion = prompt('One of the last watched films', '');
    const rateFilm = prompt('Rate this film', '');
    personalMovieDB.movies[firstQuestion] = rateFilm;
}

console.log(personalMovieDB);