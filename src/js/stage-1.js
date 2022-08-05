
//Написать функцию, которая на вход принимает целое число и возвращает факториал
// этого числа.
function func1 (num) {
    for (let i = num-1;i>1;i--) {
        num *= i;
    }
    return(num);
}

//Написать функцию, которая на вход принимает строку и возвращает длину самого
// длинного слова в этой строке
function func2 (str) {
    let maxlength = 0;
    let str1 = str.split(" ");
    for (let string of str1) {
        if (string.length > maxlength) {
            maxlength = string.length
        }
    }
    return(maxlength);
}

//Написать функцию, которая на вход принимает массив, состоящий из массивов целых
// чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из
// наибольшего числа каждого предоставленного подмассива.
function func3 (arr) {
    return arr.map(function callback(value,index,arr) {
        let maxvalue = arr[index][0];
        value.forEach(function callback(val,inx,value) {
            if (val > maxvalue) {
                maxvalue = val;
            }
        })
        return(maxvalue);
    })
}

//Написать функцию, которая на вход принимает строку и целое число и обрезает строку
// (первый аргумент), если она длиннее заданной максимальной длины строки (второй
// аргумент) и возвращает обрезанную строку с «…» в конце.
function func4 (text, length) {
    if (text.length > length) {
        text = text.slice(0, length);
        text+="...";
    }
    return(text);
}//map, splice


//Написать функцию, которая на вход принимает строку и возвращает эту строку в
// формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре
function func5 (text) {
    let str1 = text.split(" ");
    text = "";
    for (let word of str1) {
        text += word.slice(0, 1).toUpperCase();
        text += word.slice(1, word.length).toLowerCase();
        text += " ";
    }
    return(text);
}

// Написать функцию, которая на вход принимает два массива и целое число n. Функция
// должна скопировать каждый элемент первого массива во второй по порядку начиная с
// индекса n второго массива и вернуть полученный массив. Входные массивы не должны
// изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться
// [4, 1, 2, 3, 5].
function func6 (arr1,arr2,num) {
    let arr11 = arr1.slice();
    let arr22 = arr2.slice();
    for (let num of arr11)
    arr22.splice(num,0,);
    return(arr22);
}

//console.log(func1(4));
//console.log(func2("hi world"));
console.log(func3([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));
//console.log(func4("wasdwasdwasd", 4));
//console.log(func5("GOOD MORNING XFX"));
//console.log(func6([1, 2, 3], [4, 5], 1));