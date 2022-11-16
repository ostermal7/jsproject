'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const promo = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          btn = document.querySelector('button'),
          inputFilm = document.querySelector('.adding__input'),
          btnsDelete = document.querySelectorAll('.delete'),
          checkbox = document.querySelector('[type="checkbox"]'),
          addForm = document.querySelector('form.add');
    
    
    const deleteAdv = (adv) => {
        adv.forEach(element => {
            element.remove();
        });
    };
   
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
 
        let newFilm = inputFilm.value;
        const favourite = checkbox.checked;
 
        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }

            if (favourite) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
    
            event.target.reset();
        }
    });

    

    const makeChangese = () => {
    genre.textContent = "ДРАМА";
    
    poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
   
   

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList (films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((deleteBtn, i) => {
            deleteBtn.addEventListener('click', (event) => {
                deleteBtn.parentElement.remove();
                movieDB.movies.splice(i,1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(promo);
    makeChangese();
    createMovieList(movieDB.movies, movieList);
    // btn.addEventListener('click', (event) => {
    //     event.preventDefault();
    
    //     if (inputFilm.value.length > 21){
    //         movieDB.movies.push(inputFilm.value.substring(0,21) + "...");
    //     } else {
    //         movieDB.movies.push(inputFilm.value);
    //     }
    // });
    
    // btnsDelete.forEach((delBtn, i) => {
    //     delBtn.addEventListener('click', (event) => {
    //         console.log("asd");
    //         delBtn.parentElement.remove();
    //         movieDB.movies.splice(i,1);
    //     });
    // });
});