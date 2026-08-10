function findMaximumLoop(numbers) {
    let maximum = numbers[0];

    for (const number of numbers) {
        if (number > maximum) {
            maximum = number;
        }
    }

    return maximum;
}

function findMaximumSort(numbers) {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    return sortedNumbers[sortedNumbers.length - 1];
}

const numbers = [10, 5, 25, 8, 15];

console.log(findMaximumLoop(numbers));
console.log(findMaximumSort(numbers));