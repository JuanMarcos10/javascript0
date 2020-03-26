let array = [1, 2, 3, 4];

function sum (arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}


Array.prototype.sum = function sum () {
    let result = 0;
    for (let i = 0; i < this.length; i++) {
        result += this[i];
    }
    return result;
}
console.log(sum(array));
console.log(array.sum());