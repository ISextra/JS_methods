//Написать свою реализацию функции some
Array.prototype.some2 = function (callback, thisArg) {
    let arr = this;

    if (arguments.length > 1) {
        arr = thisArg;
    }

    if (arr.length < 1) {
        return false;
    }

    let i = 0;

    while (i < arr.length) {
        if (i in arr) {
            if (callback(arr[i], i, arr)) {
                return true;
            }
        }

        i++;
    }

    return false;
};
//console.log(arr2.some2((value) => value === "Ana"));