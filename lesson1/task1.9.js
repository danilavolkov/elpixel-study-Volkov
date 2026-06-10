/*
Дан массив со строками. Оставьте в этом массиве только те строки,
которые начинаются на http://.
*/

let mas = ["http://qiqi.com", "http://miku.net", "makro", "mikro"];
let filt = mas.filter(function(str){
    return str.startsWith("http://")
});

console.log(filt);

/*
Дан массив со строками.
Оставьте в этом массиве только те строки, которые заканчиваются на .html.
*/

let mas2 = ["qiqi.html", "miku.html", "yone", "yasuo"];
let filt2 = mas2.filter(function(str){
    return str.endsWith(".html")
});

console.log(filt2);

/*
Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
*/

let mas3 = [2, 3, 5, 2, 8];
for (let i = 0; i < mas3.length; i++){
    mas3[i] *= 1.1;
}

console.log(mas3);