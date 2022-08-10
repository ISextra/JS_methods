//Написать свою реализацию функции filter
Array.prototype.filter2 = function (callback, thisArg) {
    let arr = this;

    if (arguments.length > 1) {
        arr = thisArg;
    }

    let newArray = [];
    let i = 0;

    while (i < arr.length) {
        if (i in arr) {
            if (callback(arr[i], i, arr)) {
                newArray.push(arr[i]);
            }
        }

        i++;
    }

    return newArray;
};
//console.log(arr.filter2((value) => value%2 === 0));