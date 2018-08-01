let user = {
  name: "nands",
  age: 10,
  greet: function () {
    this.name = "mutating the property of the object the method resides in"
    console.log(this);
  }
}

user.greet(); // notice the value of name has been changed
// this refers to the object, inside the object
