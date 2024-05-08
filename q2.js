function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];
}

Student.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade);
};

Student.prototype.computeAverage = function () {
  if (this.grades.length === 0) {
    return 0;
  }
  const sum = this.grades.reduce(
    (total, grade) => total + grade / this.grades.length,
    0
  );
  return sum;
};

let student1 = new Student("John", "Doe");
student1.inputNewGrade(85);
student1.inputNewGrade(90);
console.log(
  `${student1.firstName} ${student1.lastName} grades: ${student1.grades}`
);
console.log(
  `${student1.firstName} ${
    student1.lastName
  } average grade: ${student1.computeAverage()}`
);

let student2 = new Student("Jane", "Smith");
student2.inputNewGrade(75);
student2.inputNewGrade(80);
student2.inputNewGrade(85);
console.log(
  `${student2.firstName} ${student2.lastName} grades: ${student2.grades}`
);
console.log(
  `${student2.firstName} ${
    student2.lastName
  } average grade: ${student2.computeAverage()}`
);
