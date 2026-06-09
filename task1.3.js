/*
Дана строка. Если в этой строке более одного символа, выведите в консоль
предпоследний символ этой строки.
*/

let farusan = "hiho";
let far = farusan.length;
if (far > 1){
    alert (farusan[farusan.length -2])
}

/*
Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
*/

let mona = 4;
let jean = 2;
if (mona % jean ===0){
    alert('без остатка')
} else {
    alert('с остатком')
}