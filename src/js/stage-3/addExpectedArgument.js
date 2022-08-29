//Написать функцию, которая суммирует два аргумента вместе. Если указан только один
// аргумент, то возвращает функцию, которая ожидает второй аргумент и возвращает
// сумму.

export function addExpectedArgument(arg1, arg2) {
    if (arguments.length < 2 || arguments[1] === null) {
        return addExpectedArgument(arg1,prompt('Введите второе значение', '1'));
    }

    if (Number(arg2)) {
        arg2 = Number(arg2);
    }

    return arg1 + arg2;
};