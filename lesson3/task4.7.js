/*
Сделайте функцию,
которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.
*/

function jiji(ger){
    let splitjiji = ger.split(' ');
    splitjiji.sort();
    return splitjiji.join(' ');
}

/*
Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
*/

function itit (arr1, arr2){
    let twoinone = [];
    for (let i = 0; i < arr1.length; i++){
        if (arr2.includes(arr1[i])){
            twoinone.push(arr1[i]);
        }
    }
    return (twoinone);
}

/*
Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
*/

let only = null;
function gg(min, max){
    let notonly;

    do {
        notonly = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (notonly === only);

    only = notonly;
    return notonly;
}

/*
Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

let arr = [1, 2, 3, 4, 5];

func(arr, 1); // 2
func(arr, 4); // 5
func(arr, 5); // 1
*/


function hoh(ara, g){
    let ggg = ara.indexOf(g);

    if (ggg === ara.length - 1){
        return ara[0];
    } else {
        return ara[ggg + 1];
    }
}