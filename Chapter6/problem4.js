const numbers = [1, 2, 4, 7, 8, 11, 12];

const evenCount = numbers.reduce((count, number) => {
    if (number % 2 === 0) {
        count++;
    }
    return count;
}, 0);

console.log(evenCount);