function calculateTotal(scores) {
    let totalScore = 0;

    for (const score of scores) {
        totalScore += score;
    }

    return totalScore;
}

function calculateAverage(scores) {
    const totalScore = calculateTotal(scores);
    return totalScore / scores.length;
}

const studentScores = [80, 90, 70, 60];
const averageScore = calculateAverage(studentScores);

console.log(`Average score: ${averageScore}`);