var arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}


arrObj = [
 "nandini",
 10,
 function speak() {
    console.log('hello');
  },
  ["english","hindi","kannada","konkani"]
]

arrObj.name = "test"; // valid syntax in array, adds the object property to an array but the value is not accessible
console.log(arrObj.name); // test
console.log(arrObj["name"]); // note: if an object property is added to array, access it through its key not index
console.log(arrObj[4]); //undefined as this is an object, access it through key

for (var i in arrObj) {
  console.log(i);
}

for (var i of arrObj) {
  console.log(i);
}
// note here the index will be udnefined for an object property in the array

