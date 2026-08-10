const sentence = "apple banana apple orange banana apple";

const wordCount = new Map();

for (const word of sentence.split(" ")) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
}

console.log(wordCount);