'use strict'; 
(function() {

  let person = {
    firstname : "Mohamed",
    lastname : "El Kashef",
    age: 17,
    isAdult() {return this.age>18}
  }


  let healthStats = {
    height : 174,
    weight : 78
  }

  display(Object.assign({},person,healthStats)); // Toujours utiliser un objet vide en premier paramètre pour préserver l'immuabilité

  display(person);

})();