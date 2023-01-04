'use strict'; 
(function() {

  function Person(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
  }

  let jim = new Person('jim','cooper');
  let sofia = new Person ('sofia','brown');

  sofia.__proto__.age = 27;

  jim.age = 18;

  display(jim.age);
  display(jim.__proto__.age);
  display(jim.hasOwnProperty('age'));

})();