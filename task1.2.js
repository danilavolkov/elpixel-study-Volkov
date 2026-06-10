/*
Дано число. Выведите в консоль первую цифру этого числа.
*/

let yoru = 123;
let stringyoru = String(yoru)[0];
console.log(stringyoru);

/*
Дано число. Выведите в консоль последнюю цифру этого числа.
*/

let miku = 321;
let stringmiku = String(miku);
console.log(stringmiku[stringmiku.length - 1]);

/*
Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
*/

let laila = 321;
let stringlaila = String(laila);
let firstlaila = stringlaila[0];
let stringlaila2 = String(laila)[stringlaila.length - 1];
let num = Number(firstlaila);
let num2 = Number(stringlaila2);
let sum = num + num2;
console.log(sum);

/*
Дано число. Выведите количество цифр в этом числе.
*/

let delta = 1234;
let stringdelta = String(delta);
console.log(stringdelta.length);

/*
Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
*/

let kira = 123;
let l = 1342;
let stringkira = String(kira);
let stringl = String(l);
if (stringkira[0] === stringl[0]){
    alert('true')
} else {
    alert('false')
}