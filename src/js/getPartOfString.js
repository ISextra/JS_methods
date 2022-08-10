//Написать функцию, которая на вход принимает строку и целое число и обрезает строку
// (первый аргумент), если она длиннее заданной максимальной длины строки (второй
// аргумент) и возвращает обрезанную строку с «…» в конце.
let getPartOfString = (text, length) => {
    if (text.length > length) {
        text = text.slice(0, length);
        text+="...";
    }
    return(text);
};
//console.log(getPartOfString("wasdwasdwasd", 4));