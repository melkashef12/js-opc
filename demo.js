'use strict'; 
(function() {

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    isAdult(){
      return this.age > 18;
    }

    get fullName() {
      return this.firstName + " "+ this.lastName;
    }
    set fullName(fullName){
      let parts = fullName.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  }

  class Student extends Person {

    constructor(firstName, lastName, age) {
      super(firstName,lastName,age);
      this.enrolledCourses = [];
    }

    enroll(courseId) {
      this.enrolledCourses.push(courseId);
    }

    getCourses(){
      return this.fullName +"'s enrolled courses are " + this.enrolledCourses.join(',' );
    }
  }

  Object.defineProperty(Person.prototype, "fullName", {enumerable : true})

  let jim = new Student("Jim", "Cooper", 29);
  display(jim);
  display(jim.isAdult());

  jim.enroll("PS101");
  jim.enroll("PS201");
  jim.enroll("MD101");
  display(jim.getCourses());

})();