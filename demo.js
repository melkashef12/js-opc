'use strict'; 
(function() {

  let person = {
    firstName : "John",
    lastName : "Doe",
  };

  Object.defineProperty(person , 'fullName', {
          get: function(){
            return this.firstName + ' ' + this.lastName;
          },
          set: function(value){
            let parts = value.split(" ");
            this.firstName = parts[0];
            this.lastName = parts[1];
          }
  });

  person.fullName = "Jim Cooper";

  display(person.firstName);
  display(person.lastName);
  display(person.fullName);


})();