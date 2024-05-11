function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades || [];

    this.inputNewGrade = function(newGrade) {
        this.grades.push(newGrade);
    };

    this.computeAverage = function() {
        if (this.grades.length === 0) return 0;
        let total = this.grades.reduce((acc, grade) => acc + grade, 0);
        return total / this.grades.length;
    };
}

// Creating some students using the constructor
var student1 = new Student("John", "Doe", [88, 92, 79]);
var student2 = new Student("Jane", "Smith", [95, 84, 91]);

// Adding new grades
student1.inputNewGrade(85);
student2.inputNewGrade(88);

// Computing and displaying averages
console.log(student1.firstName + " " + student1.lastName + " - Average Grade: " + student1.computeAverage());
console.log(student2.firstName + " " + student2.lastName + " - Average Grade: " + student2.computeAverage());
