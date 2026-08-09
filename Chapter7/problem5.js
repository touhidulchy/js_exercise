const student = {
    name: "Rahim",
    dept: "CSE",
    semester: 5
};

const jsonString = JSON.stringify(student);

console.log(jsonString);


const newStudent = JSON.parse(jsonString);


console.log(newStudent.name);