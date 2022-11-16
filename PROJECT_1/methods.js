const arr = [1,2,3,6,8];

arr.pop(); // удаляет послежний элемент
arr.push(10); //добавляет элемент в конец
arr.shift(); //удаляет первый элемент
arr.unshift(9);//добавляет элемент в самое начало
console.log(arr.join()); //превращает массив в строку, аргумент разделитель
console.log(arr.split()); //преварщает строку в массив, аргумент разделитель
const string = 'asdd';
console.log(string.split('')); //разделяет строку на массив, аргумент - разделитель


console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside of massive ${arr}`);
});