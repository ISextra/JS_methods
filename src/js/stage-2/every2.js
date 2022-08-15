//Написать свою реализацию функции every
Array.prototype.every2 = function (callback, thisArg) {
    let arr = this;

    if (arguments.length > 1) {
        arr = thisArg;
    }

    if (arr.length < 1) {
        return true;
    }

    let i = 0;
    let flag = false;

    while (i < arr.length) {
        if (i in arr) {
            if (!callback(arr[i], i, arr)) {
                return false;
            }
        }

        i++;
    }

    return true;
};
//console.log([10,11,12,13,14,15,16,17,18,19,20].every2((value) => value === !value));