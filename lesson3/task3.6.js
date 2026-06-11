/*
Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
*/

let arir = [1, 123, 1234, 45, 6789, 12345, 789, 1000];

for (let i = arir.length - 1; i >=0; i--){
    if (String(arir[i]).length > 3){
        arir.splice(i, 1);
    }
}

console.log(arir);

/*
Дано число, например, вот такое:
let num = 12345;
Проверьте, что все цифры этого числа больше нуля.
*/

let gri = 12345;
let stringgri = String(gri);
let notzero = true;

for (let i = 0; i < stringgri.length; i++){
    if (stringgri[i] === '0'){
        notzero = false;
        break;
    }
}

if (notzero){
    console.log('>0');
} else {
    console.log('<0');
}

/*
Дан некоторый массив, например, вот такой:
[123, 456, 789]
Слейте все элементы этого массива в один массив, разбив их посимвольно:
[1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

let bibi = [123, 456, 789];
let ultrabibi = bibi.join('').split('');
console.log(ultrabibi);

/*
Дан следующая структура:

let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
Найдите сумму элементов этой структуры.
*/

let fuf = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];

let sum = 0;
for (let i = 0; i < fuf.length; i++){
    let valu = Object.values(fuf[i]);
    for (let j = 0; j < valu.length; j++){
        sum += valu[j];
    }
}

console.log(sum);