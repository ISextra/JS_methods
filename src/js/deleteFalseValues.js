//Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные
// значения"
export let deleteFalseValues = arr => {
    arr = arr.filter(Boolean);
    return arr;
};