//closure
function outer(){
    let a = 'I am from outer function';

    function inner(){
        let b = 'I am from inner function';
        console.log(a);
    }
    return inner;
}
const closureFunc = outer();
closureFunc(); // output: "I am from outer function"



//promises
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //setTimeout is used for demonstration purpose, you can use any async operation
        resolve('Promise resolved');
    }, 2000);

});

promise.then((data) => {
    console.log(data); //output: Promise resolved after 2 seconds
});




//checking whether a key exist in javascript object
//using in operator
const obj = {
    name: 'John',
    age: 28
};
console.log('name' in obj); //output: true
console.log('salary' in obj); //output: false

//using hasOwnProperty method
console.log(obj.hasOwnProperty('name')); //output: true
console.log(obj.hasOwnProperty('salary')); //output: false




//Question 4
var employeeId = 'abc123'; 

function foo() {
 employeeId(); 
return; 

function employeeId() { 
console.log(typeof employeeId); 

  }
}
 foo();
//output: function



//question 5
(function(){
    'use strict';

    var person = {
        name: 'John'
    };
    person.salary = '10000$';
    person['country'] = 'USA';

    Object.defineProperty(person, 'phoneNo', {
        value: '8888888888',
        enumerable: true
    })
    console.log(Object.keys(person)); //output: ["name", "salary", "country", "phoneNo"]
})();



//question 6
(function(){
    var objA ={
        foo: 'foo',
        bar: 'bar'
    };
    var objB = {
        foo: 'foo',
        bar: 'bar'
    };
    console.log(objA == objB); //output: false
    console.log(objA === objB); //output: false
}());





//question 7
// function Person (name, age){
//     this.name = name || "John";
//     this.age = age || 24;

//     this.displayName = function(){
//         console.log(this.name);
//     }
// }

// Person.name = "John";
// Person.displayName = function(){
//     console.log(this.name);
// }

// Person.name = "John";
// Person.displayName() = function(){
//     console.log(this.name);
// }

// var Person2 = new Person1 ('Jhon');
// Person2.displayName(); //output: John
// Person.displayName(); //output: John



//question 7
function person1(name, age) {
    this.name = name || "John";
    this.age = age || 24;
    this.displayName = function() {
      console.log(this.name);
    }
  }
  
  person1.name = "John";
  person1.displayName = function() {
    console.log(this.name);
  }
  
  var person1 = new person1('John');
  person1.displayName();
  person1.displayName();


  