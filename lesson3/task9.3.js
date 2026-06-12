/*
Дан массив со словами. Получите из этого массива случайное слово, начинающееся на заданную букву.
*/

function gerar(wor, lett) {
    let fil = wor.filter(word => word[0] === lett);
    
    if (fil.length === 0) {
        return null;
    }
    
    let rando = Math.floor(Math.random() * fil.length);
    return filtered[rando];
}

/*
Пусть у нас есть дата 22.02.2017. В этой дате 4 двойки. Найдите все даты с 4-мя двойками в текущем столетии.
*/

function find() {
    let result = [];
    
    for (let year = 2000; year <= 2099; year++) {
        for (let month = 1; month <= 12; month++) {
            let lastDay = new Date(year, month, 0).getDate();
            
            for (let day = 1; day <= lastDay; day++) {
                let dateStr = formatDate(day, month, year);
                let count = (dateStr.match(/2/g) || []).length;
                
                if (count === 4) {
                    result.push(dateStr);
                }
            }
        }
    }
    
    return result;
}

function formatDate(day, month, year) {
    let d = day < 10 ? '0' + day : day;
    let m = month < 10 ? '0' + month : month;
    return `${d}.${m}.${year}`;
}

