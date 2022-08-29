//Написать функцию, которая конвертирует строку в spinal-case регистр.
export const setSpinalCase = (str) => {
    str = str.toLowerCase();
    return str.replace(/[ _]/g,"-")
}