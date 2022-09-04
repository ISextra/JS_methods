//Создайте функцию, которая просматривает массив объектов (первый аргумент) и
// возвращает массив всех объектов, имеющих совпадающие пары имя и значение
// (второй аргумент). Например: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 },
// { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) должен
// вернуться [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
export const findObject = (arr, arg) => {
    const argKeys = Object.keys(arg);
    const argValues = Object.values(arg);

    return arr.filter(object => {
        const objectKeys = Object.keys(object);
        const objectValues = Object.values(object);

        const isAllKeysIncludes = argKeys.every(element=> objectKeys.includes(element));
        const isAllValuesIncludes = argValues.every(element=> objectValues.includes(element));

        return (isAllKeysIncludes & isAllValuesIncludes);
    });
}