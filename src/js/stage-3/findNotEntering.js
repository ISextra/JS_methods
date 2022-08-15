//Написать функцию, которая на вход принимает два массива и возвращает новый
// массив с элементами найденными только в одном массиве, но не в обоих.
export let findNotEntering = (arr1, arr2) => {
    let arr3 = [];
    let arr4 = [];

    arr1.forEach(function callback(value,index) {
        if (!arr2.includes(value)) arr3.push(value);
    });

    arr2.forEach(function callback(value,index) {
        if (!arr1.includes(value)) arr4.push(value);
    });

    return arr3.concat(arr4);
};