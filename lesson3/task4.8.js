/*
Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
*/

function random(rar){
    let rara = Math.floor(Math.random() * rar.length);
    return rar[rara];
}

/*
Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
*/

function you(rarara, n){
    let res = [];
    for (let i = 0; i < n; i++){
        let rand = Math.floor(Math.random() * rarara.length);
        res.push(rarara[rand]);
    }
    return res;
}

/*
Сделайте функцию, которая параметром будет принимать массив
и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.
*/

let last = null;

function ra(arr){
    let rur;
    do {
        rur = Math.floor(Math.random() * arr.length);
    } while (rur === last);
    last = rur;
    return arr[rur];
}

/*
Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
*/

function hh(min, max){
    function pr(tr){
        if (tr < 2) return false;
        for (let i = 2; i < tr; i++){
            if (tr % i === 0) return false;
        }
        return true;
    }
    let ty = [];
    for (let i = min; i <= max; i++){
        if (pr(i)){
            ty.push(i);
        }
    } 
    return ty;
}

/*
Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.
*/

function yt(...fr){
    let rr = 0;
    for (let i = 0; i < fr.length; i++){
        rr += fr[i];
    }
    return rr;
}

/*
Сделайте функцию,
которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.
*/

function ytr(n, min, max){
    let tj = [];
    if (n <= 0) return tj;
    tj.push(Math.floor(Math.random() * (max - min + 1) + min));

    for (let i = 1; i < n; i++){
        let tw;

        do {
            tw = Math.floor(Math.random() * (max - min + 1) + min);
        } while (tw === tj[tj.length - 1]);
        tj.push(tw);

    }
    return tj;

}

/*
Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
*/

