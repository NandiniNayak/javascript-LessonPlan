console.log(a);
var a = "hello world";

// code above is syntax parsed by browser as

var a;
console.log(a);
a = "hello world";


var name
greet(name); // hello undefined
function greet(name) {
  console.log("hello "+ name);
}

// function statement(declaration) is hoisted

// function expressions are not hoisted
var name
greet(name);  // errors out
greet = function(name) {
  console.log("hello "+ name);
}
