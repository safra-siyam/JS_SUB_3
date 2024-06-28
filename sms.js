class Student {
  constructor(Sid, Sname, Semail, marks = {}) {
    this.Sid = Sid;
    this.name = Sname;
    this.Semail = Semail;
    this.marks = marks; 
    this.courses = []; 
  }

  // To enroll to course
  enrollToCourse(course) {
    this.courses.push(course);
    course.addStudent(this); 
    console.log(`Student ${this.Sid} enrolled to course ${course.Cid}`);
  }

  // To display the student details
  display() {
    console.log(`Student ID: ${this.Sid}`);
    console.log(`Student Name: ${this.name}`);
    console.log(`Student Email: ${this.Semail}`);
    console.log(`Courses: ${this.courses.map(course => course.Cid).join(", ")}`);
  }

  getMarks(courseId) {
    return this.marks[courseId];
  }

  setMarks(courseId, marks) {
    this.marks[courseId] = marks;
  }

  // To calculate the grade for a specific course
  getGrade(courseId) {
    const marks = this.getMarks(courseId);
    if (marks >= 90) {
      return 'A';
    } else if (marks >= 80) {
      return 'B';
    } else if (marks >= 70) {
      return 'C';
    } else if (marks >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
}

class Teacher {
  constructor(Tid, Tname, Temail) {
    this.Tid = Tid;
    this.Tname = Tname;
    this.Temail = Temail;
    this.courses = []; // store courses managed by the teacher
  }

  // To add course
  addCourse(Cid, Cname) {
    let course = new Course(Cid, Cname, this);
    this.courses.push(course);
    console.log(`Course ${Cid} added by teacher ${this.Tid}`);
    return course;
  }

  // To display the teacher details  
  display() {
    console.log(`Teacher ID: ${this.Tid}`);
    console.log(`Teacher Name: ${this.Tname}`);
    console.log(`Teacher Email: ${this.Temail}`);
    console.log(`Courses: ${this.courses.map(course => course.Cid).join(", ")}`);
  }
}

class Course {
  constructor(Cid, Cname, teacher) {
    this.Cid = Cid;
    this.Cname = Cname;
    this.teacher = teacher;
    this.students = []; 
    this.grades = {}; 
  }

  addStudent(student) {
    this.students.push(student);
  }

  setGrade(student, grade) {
    this.grades[student.Sid] = grade;
    student.setMarks(this.Cid, grade);
  }

  getGrades() {
    return this.grades;
  }
}

// Example usage:
let student1 = new Student(1, "John Doe", "john@example.com");
let teacher1 = new Teacher(101, "Jane Smith", "jane@example.com");
student1.display();
teacher1.display();

let course1 = teacher1.addCourse(201, "Statistics");
student1.enrollToCourse(course1);

course1.setGrade(student1, 95);
console.log(`Grade for the Statistics course : ${student1.getGrade(201)}`);


