json = {
  "first name": "nandini",
  age: 10
}

jsonString = JSON.stringify(json);
console.log(jsonString);

jsonActual = JSON.parse(jsonString);
console.log(jsonActual);
