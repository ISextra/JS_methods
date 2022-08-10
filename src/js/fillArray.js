//Используя рекурсию (без использования циклов). Написать функцию, которая
// принимает массив и целое число (n) и заполняет массив числами от n до 1.
let fillArray = (arr,n) => {
    if (n == 0) {
        return arr;
    } else {
        arr[arr.length] = n;
        return fillArray(arr,n-1);
    }
};
//console.log(fillArray([], 10));