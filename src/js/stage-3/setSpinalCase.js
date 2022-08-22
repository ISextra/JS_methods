//Написать функцию, которая конвертирует строку в spinal-case регистр.
export const setSpinalCase = (str) => {
    return str.replace(/^[\W_]+|[\W_]+$|([\W_]+)/g, function ($0, $1) {
        return $1 ? "-" : "";
    }).replace(/([a-z])(?=[A-Z])/g, '$1-').toLowerCase();
}
//https://stackoverflow.com/questions/55464314/convert-a-string-to-spinal-case