'use strict'; 
(function() {

  let person = {
    firstname : "Mohamed",
    lastname : "El Kashef",
    age: 17,
    isAdult() {return this.age>18}
  }


  display(Object.keys(person));
  display("=====================");
  for(let propertyName in person){
    display(propertyName)
  }
})();