const students = [
    {
        name: "Aman",
        marks: [78, 85, 90]
    },
    {
        name: "Priya",
        marks: [92, 88, 95]
    },
    {
        name: "Rahul",
        marks: [65, 70, 60]
    },
    {
        name: "Neha",
        marks: [80, 82, 84]
    }
];

const result = students.map(student => {

    const total = student.marks.reduce((sum, mark) => sum + mark, 0);

    const avg = Number(
        (total / student.marks.length).toFixed(2)
    );

    let grade;

    if (avg >= 90) {
        grade = "A";
    } else if (avg >= 80) {
        grade = "B";
    } else if (avg >= 60) {
        grade = "C";
    } else {
        grade = "F";
    }

    return {
        name: student.name.toUpperCase(),
        average: avg,
        grade: grade
    };
});

console.log(result);