function isEven(n) {
    return n % 2 === 0;
}

for (let i = 1; i <= 10; i++) {
    console.log(i + ":", isEven(i));
}