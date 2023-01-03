'use strict'; 
(function() {

  let person = {
    firstname : "Mohamed",
    lastname : "El Kashef",
    age: 17,
    isAdult() {return this.age>18}
  }

  // Une fonction constructeur est une fonction normale qui fait référence à this.
  // this est le contexte dans lequel la fonction s'éxécute.
  function Person(firstName,lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult =function() {return this.age > 18; }
  }

  // new crée implicitement un Object et l'assigne à this pour qu'il devienne le contexte d'exécution de la fonction constructeur
  display(new Person("Mo", "El Kashef",36).isAdult());
  display(new Person("Dahlia", "El Kashef",5).isAdult());

})();