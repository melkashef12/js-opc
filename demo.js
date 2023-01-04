'use strict'; 
(function() {

  function Person(firstName, lastName){
      this.firstName = firstName;
      this.lastName = lastName;
  }

  let jim = new Person('jim','cooper');
  let sofia = new Person ('sofia','brown');

  sofia.__proto__.age = 27;

  //La prototype de la fonction constructeur est la même instance
  //que les prototypes de chaque objet crée avec cette fonction
  display(Person.prototype === jim.__proto__);
  display(sofia.__proto__ === jim.__proto__);

  display(Person.prototype);
  display(jim.__proto__);
  display(sofia.__proto__);

})();