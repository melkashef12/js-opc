'use strict';
(function() {

  function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(Person.prototype,'fullName',{
      enumerable : true,
      get : function(){
        return this.firstName + ' ' + this.lastName;
      }
    });
  }



  function Student(firstName, lastName, age){
    Person.call(this,firstName,lastName,age);
    this.enrolledCourses = [];

    this.enroll = function(courseId){
      this.enrolledCourses.push(courseId);
    }

    this.getCourses = function(){
      return this.fullName + "'s enrolled courses are: "+this.enrolledCourses.join(', ');
    }
  }

  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;

  let jim = new Student('jim', 'Copper',29);

  jim.enroll('CS205');
  jim.enroll('MA101');
  jim.enroll('PS101');

  display(jim.getCourses());



})();