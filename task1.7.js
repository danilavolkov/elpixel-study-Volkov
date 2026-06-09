/*
Дана строка:
'abcde'
Получите массив букв этой строки.
*/

let prun = 'abcde';
let kli = prun.split('');

/*
Дано некоторое число:
12345
Получите массив цифр этого числа.
*/

let qiqi = 12345;
let stringqiqi = String(qiqi);
let yaoyao = stringqiqi.split('');

/*
Дано некоторое число:
12345
Переверните его:
54321
*/

let alisa = 12345;
let stringalisa = String(alisa);
let reversealisa = stringalisa.split('').reverse();
let joinalisa = reversealisa.join('');
let numberalisa = Number(joinalisa);

/*
Дано некоторое число:
12345
Найдите сумму цифр этого числа.
*/

let ei = 12345;
let stringei = String(ei);
let sum = 0;
for (let i = 0; i < stringei.length; i++){
    sum = sum + Number(stringei[i]);
}

console.log(sum);