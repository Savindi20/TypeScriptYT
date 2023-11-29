interface Student {
    name: string;
    address: string;
    contact: number[];
}

class StudentManager {
    static students: Student[] = [];

    static addStudent(student: Student) {
        StudentManager.students.push(student);
    }

    static printAll() {
        StudentManager.students.forEach((e) => console.log(e));
    }
}

StudentManager.addStudent({
    name: 'Savindi',
    address: '',
    contact: [1111111],
});
StudentManager.addStudent({
    name: 'Sewmi',
    address: '',
    contact: [],
});
StudentManager.printAll();