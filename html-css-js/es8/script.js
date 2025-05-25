const students = [
  { id: 101, name: "Fabio", grades: [8, 9, 10, 8] },
  { id: 102, name: "Martina", grades: [7, 6, 6, 8] },
  { id: 103, name: "Giorgio", grades: [10, 10, 10, 10] },
  { id: 104, name: "Alessia", grades: [6, 7, 7, 6] }
];

//step 1
students.forEach((student) => {
  const uniqueSet = new Set(student.grades);

  const uniqueGrades = [...uniqueSet];
  student.uniqueGrades = uniqueGrades;

});

//step 2

const studentAverages = students.map((student) => {
  let sum = 0;
  student.uniqueGrades.forEach((grade) => {
    sum += grade;
  });
  const avg = sum / student.uniqueGrades.length;
  return {
    name : student.name,
    avg : avg
  };

});

//step 3

const topStudents = studentAverages.filter((student) => {
  return student.avg >= 8;
});

//step 4

const studentMap = new Map();
students.forEach((student) => {
  studentMap.set(student.id, student.name);
});
console.log(studentMap.get(103)); // "Giorgio"
console.log(studentMap); // stampa tutta la mappa


//step 5

topStudents.forEach((student) => {
  console.log(`${student.name} ha una media di ${student.avg}`);
});
