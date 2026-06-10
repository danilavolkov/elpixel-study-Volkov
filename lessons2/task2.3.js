/*
Даны два слова. 
Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
*/

let fishl = 'привет';
let oz = 'пока';
if (fishl[fishl.length - 1] === oz[0]){
        alert('true')
} else {
        alert('false')
}

/*
Дана некоторая строка. Найдите позицию третьего нуля в строке.
*/

let barbara = 'fi0ro0mf0fg';
let rosa = 0;
let goro = 0;
for (let i = 0; i < barbara.length; i++){
    if (barbara[i] === '0'){
        rosa = rosa + 1;
        if (rosa === 3){
        goro = i;
        break;
        }
    } 
}
if (rosa === 3){
    console.log(goro);
}

/*
Даны числа, разделенные запятыми:
'12,34,56'
Найдите сумму этих чисел.
*/

let hamburger = '12,34,56';
let cheesburger = hamburger.split(',');
let sum = 0;

for (let i = 0; i < cheesburger.length; i++){
    sum += Number(cheesburger[i]); 
}

console.log(sum);


/*
Дана дата в следующем формате:
'2025-12-31'
Преобразуйте эту дату в следующий объект:
{
	year: '2025',
	month: '12',
	day: '31',
}
*/

let date = '2025-12-31'
let partdate = date.split('-');
let object = {
    year: partdate[0],
    month: partdate[1],
    day: partdate[2]
}

console.log(object);