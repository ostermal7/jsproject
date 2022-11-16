'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');
div.classList.add('black');

wrapper.append(div); //append метод добавляет класс-аргумент (div) в конец класса (wrapper)
//wrapper.prepend(div); //prepen метод добавляет класс-аргумент (div) в начало класса (wrapper)

//hearts[0].before(div); //before метод добавляет класс-аргумент (div) перед классом (hearts[0])
//hearts[0].after(div);  //before метод добавляет класс-аргумент (div) после класса (hearts[0])
//wrapper.insertBefore(div, hearts[0]); //вставили див класс перед хертс0, устаревший метод

//circles[0].remove(); //удаляет указанный класс
//wrapper.removeChild(hearts[0]);  старый метод удаления класса

//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]); заменяет hearths[0] на circles[0], утсаревший метод

div.innerHTML = "<h1>Hello World</h1>";

//div.textContent = "Hello";

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');