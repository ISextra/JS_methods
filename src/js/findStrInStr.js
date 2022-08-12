//Написать функцию, которая на вход принимает массив, состоящий из двух строк.
// Функция должна вернуть true, если строка в первом элементе массива содержит все
// буквы строки во втором элементе массива (регистр игнорируется).
let findStrInStr = arr => {
    let str1;
    let str2;

    if (arr[0].toLowerCase()) {
        str1 = arr[0].toLowerCase();
        str2 = arr[1].toLowerCase();
    } else {
        str1 = arr[0];
        str2 = arr[1];
    }

    if (str1.indexOf(str2) > -1) return true;
    else return false;
};