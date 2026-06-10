/*
Заполните массив случайными числами из промежутка от 1 до 100.
*/

let varka = [];
for (let i = 0; i < 6; i++){
    let randomvarka = Math.floor(Math.random() * 100 + 1);
    varka.push(randomvarka);
}

console.log(varka);

/*
Дано некоторое число:
12345
Выведите в консоль все его символы с конца.
*/

let furina = 12345;
let stringfurina = String(furina);
let nevelete = stringfurina.split('');
for (let i = stringfurina.length - 1; i >=0; i--){
    console.log(nevelete[i]);
}


/*
Дан некоторый массив, например, вот такой:
[1, 2, 3, 4, 5, 6]
По очереди выведите в консоль подмассивы из двух элементов нашего массива:
[1, 2]
[3, 4]
[5, 6]
*/

