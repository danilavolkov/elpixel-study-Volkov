/*
Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.
*/

function fifi() {
    let tod = new Date();
    let cur = tod.getFullYear();
    let mon = tod.getMonth();
    let da = tod.getDate();
    
    if (lea(cur)) {
        let feb = new Date(cur, 1, 29);
        
        if (feb > today) {
            return Math.ceil((feb - tod) / (1000 * 60 * 60 * 24));
        }
    }
    
    let nex = cur + 1;
    while (!lea(nex)) {
        nex++;
    }
    
    let ne = new Date(nex, 1, 29);
    return Math.ceil((ne - tod) / (1000 * 60 * 60 * 24));
}

function lea(ye) {
    return (ye % 4 === 0 && ye % 100 !== 0) || (ye % 400 === 0);
}

/*
Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.
*/

function getNextMaslenitsa() {
    let today = new Date();                   
    let year = today.getFullYear();    
    
    function getLastSundayOfFeb(y) {
        let date = new Date(y, 1, 28);    
        while (date.getDay() !== 0) {          
            date.setDate(date.getDate() - 1);  
        }
        return date;
    }
    
    let maslenitsa = getLastSundayOfFeb(year);
    
    if (maslenitsa < today) {
        maslenitsa = getLastSundayOfFeb(year + 1);
    }
    
    return maslenitsa;
}

console.log(getNextMaslenitsa().toLocaleDateString('ru-RU'));

/*
Сделайте функцию, которая будет возвращать случайный цвет.
*/

function RandomColor() {
    let le = '0123456789ABCDEF';
    let col = '#';
    
    for (let i = 0; i < 6; i++) {
        col += le[Math.floor(Math.random() * 16)];
    }
    
    return col;
}

console.log(RandomColor());

/*
Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.
*/

function comdi(arr) {
    if (arr.length === 0) return [];
    
    let min = Math.min(...arr);
    let div = [];
    
    for (let i = 1; i <= min; i++) {
        let isd = true;
    
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % i !== 0) {
                isd = false;
                break;
            }
        }
        
        if (isd) {
            div.push(i);
        }
    }
    
    return div;
}

/*
Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
*/

function mafrea(arr) {
    let res = [];
    
    for (let i = 0; i < arr.length; i++) {
        let max = Math.max(...arr[i]);
        res.push(max);
    }
    
    return res;
}