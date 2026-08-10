function printEveryPair(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

function isEven(number) {
    return number % 2 === 0;
}

function sumArray(array) {
    let sum = 0;

    for (const number of array) {
        sum += number;
    }

    return sum;
}