
//Написать функцию, которая на вход принимает массив, состоящий из двух строк.
// Функция должна вернуть true, если строка в первом элементе массива содержит все
// буквы строки во втором элементе массива (регистр игнорируется).
export const findStrInStr = arr => {
    let [str1, str2] = arr;

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let i = 0;

    while (i < str2.length) {
        if (str1.indexOf(str2[i]) !== -1) {
            i++;
        } else {
            return false;
        }
    }

    return true;
};