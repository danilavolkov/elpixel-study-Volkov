/*
Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
*/

let hurma = 'fjiq3alncao';
let fu = 0;
for (let i = 0; i < hurma.length; i++){
    if (hurma[i] >= '0' && hurma[i] <= '9'){
        fu += 1;
    if (fu === 1){
        console.log(i);
        }    
    }
}

/*
Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
*/

let morgana = {
    master: 'raidenEi',
    notamaster: 'scaramucha'
}
let morganakeys = Object.keys(morgana);
let morganavalues = Object.values(morgana);

console.log(morganakeys);
console.log(morganavalues);

/*
Дано число. Выведите в консоль количество четных цифр в этом числе.
*/

let hutao = 123456;
let miniqiqi = 0;
let stringhutao = String(hutao);
let splithutao = stringhutao.split('');
for (let i = 0; i < stringhutao.length; i++){
    if (splithutao[i]%2 === 0){
        miniqiqi += 1;
    }
}

console.log(miniqiqi);

/*
Дана некоторая строка:
'abcde'
Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
'AbCdE'
*/

let fufu = 'abcde';
let splitfufu = fufu.split('');
for (let i = 0; i < splitfufu.length; i++){
    if ((i + 1) % 2 !== 0){
        splitfufu[i] = splitfufu[i].toLocaleUpperCase();
    }
}

let resultfufu = splitfufu.join('');
console.log(resultfufu);

/*
Дана некоторая строка со словами:
'aaa bbb ccc'
Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
'Aaa Bbb Ccc'
*/

let horry = 'aaa bbb ccc';
let splithorry = horry.split(' ');
for (let i = 0; i < splithorry.length; i++){
    let horry2 = horry[i];
    let horry3 = horry2[0].toUpperCase() + horry2.slice(1);
    splithorry[i] = horry3;
}

let res = splithorry.join(' ');
console.log(res);