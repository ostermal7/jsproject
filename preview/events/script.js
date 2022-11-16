// 45. События и их обработчики
const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('click');
// };
let i =0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if(i == 1){
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); //отменяет браузерную логику (в этом случае при нажатии на ссылку ты не переходишь по ней)

    console.log(event.target);
});