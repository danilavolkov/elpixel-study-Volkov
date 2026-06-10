/*
Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
*/

let hurem = 'biqb21njnn';
let hurem2 = 0;
for (let i = 0; i < hurem.length; i++){
    if (hurem[i] >= 'a' && hurem[i] <= 'z'){
        hurem2 +=1;
    }
}
if (hurem2 > 3){
        console.log('больше 3 букв');
}   

/*
Дано число. Получите первую четную цифру с конца этого числа.
*/

let egor = 1211223;
let stringegor = String(egor);
for (let i = stringegor.length - 1; i >= 0; i--){
    if (stringegor[i] % 2 === 0){
        console.log(stringegor[i]);
    }
}

/*
Дана некоторая строка:
'abcde abcde abcde'
Замените в ней первый символ каждого слова на '!':
'!bcde !bcde !bcde'
*/

let fr = 'abcde abcde abcde';
let fro = fr.split(' ');
for (let i = 0; i < fro.length; i++){
    fro[i] = '!' + fro[i].slice(1);
}
let res = fro.join(' ');
console.log(res);

/*
Дан массив с числами:
[1, 2, 3, 3, 4, 5]
Проверьте, что в этом массиве есть два одинаковых элемента подряд.
*/

let mas = [1, 2, 3, 4, 5];
let flag = false;
for (let i = 0; i < mas.length - 1; i++){
    if (mas[i] === mas[i+1]){
        flag = true;
        break;
    }
}

if (flag){
    alert('есть два подряд');
} else {
    alert ('нету');
}