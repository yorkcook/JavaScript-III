/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the highest level of binding. The "this" keyword is defaulted to whatever it is on the global scale. Can be overcome by using `use strict`
* 2. Implicit Binding is identified by being to the left of the dot, it is a method on the object. It is easily passed around to different variables.
* 3. New Binding is invoked using the new key word and produces a new object.
* 4. Explicit Binding in invoked using the .call, .apply, .bind words and passes arguements in. Call passes in the arguements one by one, apply parses the arguements, and bind returns a new function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var sayMyName = function () {
    `use strict`;
    console.log(this.name);
  };
  
  var me = {
    name: 'York'
  };
  
  // global.name = 'York';
  sayMyName();
  

// Principle 2

// code example for Implicit Binding

let york = {
    name: 'York',
    sayName: function (){
      console.log(`My name is ${this.name}`)
    }
  }
  
  york.sayName();

// Principle 3

// code example for New Binding

function sayGoodBye (person) {
    this.saying = "Later Alligator!"
    this.person = person;
    this.speak = function () {
      console.log(`${this.saying} from ${this.person}`);
      console.log(this);
    }
  }
  
  const york = new sayGoodBye('York');
  
  york.speak();

// Principle 4

// code example for Explicit Binding

let sayName = function (lang1, lang2){
    console.log(`My name is ${this.name} and I want to learn ${lang1} and ${lang2}`)
  }

let languages = ['Spanish', 'French']

let york = {
  name: 'York',
}

sayName.call(york, ...languages);