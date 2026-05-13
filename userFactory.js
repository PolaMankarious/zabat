class User {
  constructor(name, dob, email) {
    this.name = name;
    this.dob = new Date(dob);
    this.email = email;
  }

  //getters and setters
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getAge() {
    const today = new Date();
    const birthDate = this.dob;
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }
}

class Student extends User {
  constructor(name, dob, email) {
    super(name, dob, email);
    this.role = "Student";
  }
}

class Admin extends User {
  constructor(name, dob, email) {
    super(name, dob, email);
    this.role = "Admin";
  }
}

class Teacher extends User {
  constructor(name, dob, email) {
    super(name, dob, email);
    this.role = Teacher;
  }
}

const student1 = new Admin("John Doe", "2000-05-15", "john@example.com");
console.log("Student Name:", student1.getName());
console.log("Student Email:", student1.getEmail());
console.log("Student Age:", student1.getAge());
console.log("Role:", student1.role);
