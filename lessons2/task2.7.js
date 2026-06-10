/*
Дана некоторая строка:
'a bc def ghij'
Переведите в верхний регистр все подстроки,
в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
'A BC DEF ghij'
*/

let mas = 'a bc def ghij';
let splitmas = mas.split(' ');
 for (let i = 0; i < splitmas.length; i++){
    if (splitmas[i].length <= 3){
        splitmas[i] = splitmas[i].toUpperCase();
    }
 }

 console.log(splitmas.join(' '));

 /*
Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
*/

let regi = 'A';

if (regi === regi.toUpperCase() && regi !== regi.toLowerCase()){
    alert ('верхний регистр');
} else if (regi === regi.toLowerCase() && regi !== regi.toUpperCase()){
    alert ('нижний регистр');
}

/*
Дано некоторое число, например, такое:
123789
Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
28
*/

let giga = 12345;
let gugu = String(giga);
let gaga = gugu.split('');
let gege = gaga.filter(gaga => gaga % 2 === 0);
let gigu = gege.join('');
console.log(gigu);