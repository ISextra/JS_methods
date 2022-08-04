
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
    let length = 0;
    let maxlength = 0;
    for (let i = 0; i<str.length;i++) {
        length++;
        if ((str[i+1] === " ")||(str[i+1] === undefined)){
            if (length > maxlength) {
                maxlength = length;
            }
            i++;
            length=0;
        }
    }
    return(maxlength);
}

//Написать функцию, которая на вход принимает массив, состоящий из массивов целых
// чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из
// наибольшего числа каждого предоставленного подмассива.
function func3 (arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        let maxnum = arr[i][0];
        for (let j = 0; j < arr[i].length;j++){
            if (maxnum < arr[i][j]) {
                maxnum = arr[i][j];
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
    for (let i = length; i < text.length-1;i++) {
        text[i] = "";
    }
    text += "...";
    return(text);
}//map, splice

//console.log(func1(4));
//console.log(func2("hi world"));
//console.log(func3([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));
console.log(func4("wasdwasdwasd", 4));