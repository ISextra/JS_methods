//Написать функцию, которая осуществляет поиск и замену в предложении. Первый
// аргумент - это строка, в которой осуществляется поиск и замена. Второй аргумент - это
// слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить.
// При замене сохраняйте регистр первого символа в исходном слове.
export const deleteStrInStr = (str, searchWord, replaceWord) => {
    let arr1 = str.split(" ");

    arr1.reduce( (result, value,index) => {
        if (value === searchWord) {
            if (value[0] === value[0].toUpperCase()) {
                replaceWord = replaceWord.slice(0, 1).toUpperCase() + replaceWord.slice(1, value.length+1);
            }

            arr1.splice(index,1,replaceWord);
        }

        return value;
    });

    return arr1.join(' ');
};
