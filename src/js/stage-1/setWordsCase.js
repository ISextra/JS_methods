//Написать функцию, которая на вход принимает строку и возвращает эту строку в
// формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре
export const setWordsCase = text => {
    const str1 = text.split(" ");

    const str2 = str1.map( (value) => {
        return `${value.slice(0, 1).toUpperCase()} + ${value.slice(1, value.length).toLowerCase()}`;
    });

    return str2.join(' ');
};