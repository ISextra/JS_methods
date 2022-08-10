//Написать функцию, которая на вход принимает строку и возвращает эту строку в
// формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре
let setWordsCase = text => {
    let str1 = text.split(" ");
    text = "";

    str1.map(function callback(value, index) {
        text += value.slice(0, 1).toUpperCase();
        text += value.slice(1, value.length).toLowerCase();
        if (index !== str1.length-1) {
            text += " ";
        }
    });

    return(text);
};
//console.log(setWordsCase("GOOD MORNING XFX"));