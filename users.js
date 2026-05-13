class User {
  constructor(name, dob, email) {
    this.name = name;
    this.dob = dob;
    this.email = email;
  }

  //getters and setters
  getName() {
    return User.name;
  }

  getEmail() {
    return User.email;
  }

  getAge() {
    const today = new Date();
    const birthDate = this.dob;
    age = today.getFullYear() - birthDate.getFullYear();
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
