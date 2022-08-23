//Написать функцию, которая на вход принимает два массива и возвращает новый
// массив с элементами найденными только в одном массиве, но не в обоих.
export const deleteElementsFromFirstArray = (firstArray, secondArray) => {
    return firstArray.filter(
        element => !secondArray.includes(element)
    );
};