/*
Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
*/

for (let i = 10; i <= 1000; i++){
    let stringi = String(i);
    if (stringi[stringi.length - 2] % 2 === 0){
        console.log(i)
    }
}

/*
Дан массив. Удалите из него каждый пятый элемент.
*/

let ari = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 10];

for (let i = ari.length - 1; i >= 0; i--){
    if ((i + 1) % 5 === 0){
        ari.splice(i, 1);
    }
}

console.log(ari);

/*
Дана некоторая переменная с числом:
let num = 5;
Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
'00000'
*/

let num = 5;
let numnum = '0'.repeat(num);
console.log(numnum);

/*
Дана некоторая строка со словами:
'aaa bbb ccc eee fff'
Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
'aaa ccc fff'
*/

let oriana = 'aaa bbb ccc eee fff';
let sliceoriana = oriana.split(' ');

for (let i = sliceoriana.length - 1; i >=0; i--){
    if ((i + 1) % 2 === 0){
        sliceoriana.splice(i, 1);
    }
}


console.log(sliceoriana);


/*
Дан массив:
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
Найдите сумму элементов этого массива.
*/

let gh = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let sum = 0;

for (let i = 0; i < gh.length; i++){
    for (let j = 0; j < gh[i].length; j++){
        sum += gh[i][j];
    }
}

console.log(sum);