//Написать свою реализацию функции find
Array.prototype.find2 = function (callback, thisArg) {
    let arr = this;

    if (arguments.length > 1) {
        arr = thisArg;
    }

    let i = 0;

    while (i < arr.length) {
        if (i in arr) {
            if (callback(arr[i], i, arr)) {
                return arr[i];
            }
        }

        i++;
    }
};
//console.log(arr2.find2((value) => value === "Ana"));