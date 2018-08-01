// notice how the symbols cannot be mutated, hence avoids overwriting from code in other files
const myModule = require('./lesson3-export');
//
// let user = {name: "nayak"};
// let id = Symbol("id value in current file");
// user[id] = "id value in current file"
//
//
// let valSymbol = myModule.symbolExample();
//
// console.log(valSymbol); // id from another file
// console.log(user[id]); // id value in current file



// #################################String overwrites################
user = {name: "nayak"};
user["id"] = "id value in current file"


let valString = myModule.stringExample();

console.log(valString); // id from another file
console.log(user["id"]); // id from another file
