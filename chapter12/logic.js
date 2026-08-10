export function calculateGrade(marks) {
    const average =
        marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

    if (average >= 80) return "A+";
    if (average >= 70) return "A";
    if (average >= 60) return "B";
    if (average >= 50) return "C";
    if (average >= 40) return "D";
    return "F";
}