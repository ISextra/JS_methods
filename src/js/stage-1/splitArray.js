//Написать функцию, которая на вход принимает масссив и целое число. Функция
// должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и
// вернуть их в виде двумерного массива.
export const splitArray = (arr, size) => {
    const arr1 = arr.slice();
    let arr2 = [];
    let arrayIndex = -1;

    arr2 = arr1.reduce((final, curr, i) => {
        if (i % size === 0) {
            final.push([curr]);
            arrayIndex++;
        } else {
            final[arrayIndex].push(curr);
        }
        return final;
    }, arr2);

    return arr2;
};