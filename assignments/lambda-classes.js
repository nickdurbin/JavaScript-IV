// CODE here for your Lambda Classes

class Person {
  constructor(trait) {
    this.name = trait.name;
    this.age = trait.age;
    this.location = trait.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}

class Instructor extends Person {
  constructor(instrAtts) {
    super(instrAtts);
    this.specialty = instrAtts.specialty;
    this.favLanguage = instrAtts.favLanguage;
    this.catchPhrase = instrAtts.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student} receives a perfect score on ${subject}.`
  }
}

class Student extends Person {
  constructor(stuAtts) {
    super(stuAtts);
    this.previousBackground = stuAtts.previousBackground;
    this.className = stuAtts.className;
    this.favSubjects = stuAtts.favSubjects;
    this.grade = stuAtts.grade;
  }
  listSubjects() {
    this.favSubjects.forEach(element => {
      return element;
    });
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`
  }
  graduatePF(grade) {
    `grade.includes() ? ${this.grade} > 70 === true : false`; 
  }
}

class TeamLead extends Instructor {
  constructor(tlAtts) {
    super(tlAttrs);
    this.gradClassName = tlAtts.gradClassName;
    this.favInstructor = tlAtts.favInstructor;
  }
  standUp(channel) {
    return `${name} announces to ${channel}. @channel standy times!`
  }
  debugsCode(student, subject) {
    return `${name} debugs ${student}'s code on ${subject}.`
  }
}

