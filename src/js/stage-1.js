
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
    let arr1 = [];
    for (let i of arr) {
        let maxnum = i[0];
        for (let j of i){
            if (maxnum < j) {
                maxnum = j;
            }
        }
        arr1.push(maxnum);
    }
    return(arr1);
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
    for (let string of str1) {
        console.log(string);
        text += string.slice(0, 1).toUpperCase();
        text += string.slice(1, string.length).toLowerCase();
        text += " ";
    }
    return(text);
}

//console.log(func1(4));
//console.log(func2("hi world"));
//console.log(func3([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));
//console.log(func4("wasdwasdwasd", 4));
console.log(func5("GOOD MORNING XFX"));