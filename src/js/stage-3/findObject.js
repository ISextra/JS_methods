//Создайте функцию, которая просматривает массив объектов (первый аргумент) и
// возвращает массив всех объектов, имеющих совпадающие пары имя и значение
// (второй аргумент). Например: whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 },
// { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) должен
// вернуться [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
export const findObject = (arr, arg) => {
    let arr1 = [];

    arr.forEach(function callback(value) {
        let flag = true;

        for (let key in arg) {
            if (!(key in value) || value[key] !== arg[key]) {
                flag = false
            }
        }

        if (flag) {
            arr1.push(value);
        }
    });
    return arr1;
}