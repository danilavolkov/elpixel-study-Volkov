/*
Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.
*/

function lini(a){
    let count = 0;
    for (let i = 1; i <= a; i++){
        if (a % i === 0){
            count++
        }
    }
    return count;
}

/*
Сделайте функцию, которая параметром будет принимать дату,
а возвращать знак зодиака, соответствующий этой дате.
*/

function fufufu(date){
    let month = date.getMonth();
    let day = date.getDay();

    if((month === 12 && day === 22) || (month === 1 && day === 19)) return 'Козерог';
    if((month === 1 && day === 20) || (month === 2 && day === 18)) return 'Водолей';
    if((month === 2 && day === 19) || (month ===3 && day === 20)) return 'Рыбы';
    if((month === 3 && day === 21) || (month === 4 && day === 19)) return 'Овен';
    if((month === 4 && day === 20) || (month === 5 && day === 20)) return 'Телец';
    if((month === 5 && day === 21) || (month === 6 && day === 20)) return 'Близнецы';
    if((month === 6 && day === 21) || (month === 7 && day === 22)) return 'Рак';
    if((month === 7 && day === 23) || (month === 8 && day === 22)) return 'Лев';
    if((month === 8 && day === 23) || (month === 9 && day === 22)) return 'Дева';
    if((month === 9 && day === 23) || (month === 10 && day === 22)) return 'Весы';
    if((month === 10 && day === 23) || (month === 11 && day === 21)) return 'Скорпион';
    if((month === 11 && day === 22) || (month === 12 && day === 21)) return 'Стрелец';
}

/*
Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
*/

function ruru(g){
    let huhu = [];

    for (let i = 1; i <=g; i++){
        if (g%i === 0){
            huhu.push(i);
        }
    }
    return huhu;
}

/*
Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
*/


function gigi(g){
  if (g < 2) return false;
  for (let i = 2; i < g; i++){
    if (g%i === 0){
        return false;
    }
  }   
  return true;
}


/*
Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
*/

function hehe(g){
    let stringg = String(g);
    let musorka = '';
    for (let i = 0; i < stringg.length; i++){
        let musor = stringg[i];
        if (musor % 2 !== 0){
            musorka += musor;
        }
    }
    return Number(musorka);
}

/*
Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
*/

function gjgj(n, min, max){
    let furina = [];
    for (let i = 0; i < n; i++){
        let fullrandom = Math.floor(Math.random() * (max - min + 1)) + min;
        furina.push(fullrandom);
    }
    return furina;
}