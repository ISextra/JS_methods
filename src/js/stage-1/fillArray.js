//Используя рекурсию (без использования циклов). Написать функцию, которая
// принимает массив и целое число (n) и заполняет массив числами от n до 1.
export const fillArray = (arr,n) => {
    if (n < 0) {
        return arr;
    }

    if (n !== 0) {
        arr[arr.length] = n;

        return fillArray(arr, n - 1);
    }

    return arr;
};