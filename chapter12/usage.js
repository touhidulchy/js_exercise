import { calculateGrade } from "./logic.js";

const marks = [80, 75, 90, 85];

const grade = calculateGrade(marks);

console.log("Grade:", grade);