//Написать функцию, которая на вход принимает масссив и целое число. Функция
// должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и
// вернуть их в виде двумерного массива.
export let splitArray = (arr, size) => {
    let arr1 = arr.slice();
    let arr2 = [];

    while (arr1.length > 0) {
        if (size > arr1.length) size = arr1.length;
        let a = arr1.slice(0,size);
        arr2.splice(arr2.length, 0,a);
        arr1.splice(0, size);
    }

    return arr2;
};