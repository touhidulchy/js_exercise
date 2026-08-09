const students = [
    { name: "Rahim", cgpa: 3.2 },
    { name: "Karim", cgpa: 3.8 },
    { name: "Sadia", cgpa: 3.6 },
    { name: "Nadia", cgpa: 3.1 }
];

const result = students
    .filter(student => student.cgpa >= 3.5)
    .map(student => student.name);

console.log(result);