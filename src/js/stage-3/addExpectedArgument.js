//Написать функцию, которая суммирует два аргумента вместе. Если указан только один
// аргумент, то возвращает функцию, которая ожидает второй аргумент и возвращает
// сумму.

export const addExpectedArgument = (arg1, arg2) => {
    if (Function.length < 2) {
        arg2 = prompt("Введите второй аргумент");
    }

    if (Number(arg2)) {
        arg2 = Number(arg2);
    }

    return arg1 + arg2;
};