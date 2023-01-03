'use strict'; 
(function() {

  let person = {
    firstname : "Mohamed",
    lastname : "El Kashef",
    age: 29,
    isAdult : function (){return this.age>18}
  }

  display(person.isAdult());


})();