//Написать функцию, которая на вход принимает массив и еще один или несколько
// аргументов (точное количество не известно). Удалить из массива все элементы,
// которые имеют то же значение, что и эти аргументы.
export const deleteFromArray = (arr,...args) => {
    let index = 0;

    while (index < arr.length) {
        if (args.includes(arr[index])) {
            arr.splice(index,1);
        } else {
            index++;
        }
    }

    return arr;
}