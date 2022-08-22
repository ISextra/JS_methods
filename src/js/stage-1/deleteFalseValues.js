//Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные
// значения"
export const deleteFalseValues = arr => {
    arr = arr.filter(Boolean);

    return arr;
};