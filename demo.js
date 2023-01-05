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

  let jim = new Person("Jim", "Cooper", 29);
  display(jim);
  display(jim.isAdult());

})();