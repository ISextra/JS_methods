//Написать функцию, которая осуществляет поиск и замену в предложении. Первый
// аргумент - это строка, в которой осуществляется поиск и замена. Второй аргумент - это
// слово, которое нужно заменить, третий аргумент - слово, на которое нужно заменить.
// При замене сохраняйте регистр первого символа в исходном слове.
export const deleteStrInStr = (str, searchWord, replaceWord) => {
    const isFirstCharacterInUpperCase = (Array) => {
        const firstCharacter = Array[0];

        return firstCharacter === firstCharacter.toUpperCase();
    }

    const result = str.split(" ");

    return result.reduce((previous, current) => {
        if (current === searchWord) {
            if (isFirstCharacterInUpperCase(current)) {
                replaceWord = replaceWord.slice(0, 1).toUpperCase() + replaceWord.slice(1, current.length+1);
            }

            return `${previous} ${replaceWord}`;
        }

        return `${previous} ${current}`;
    });
};
