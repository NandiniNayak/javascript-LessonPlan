// ########################### pseudo class ###########################

function Dog(name,location){
  this.name = name
  this.location = location
//   static welcome() {
//     console.log("hello")
//   }
  // static methods are not allowed in functions, hence function methods are accessible only through instance methods
}


Dog.prototype.speak = function(){
  console.log(`whoof my name is ${this.name} and I am from ${this.location}`);
  console.log(this);
}

Dog.prototype.setLocation = function(location){
  this.location = location;
}
Dog.prototype.speak();  // this variable refers to corresponding function Dog

Dog.speak(); // not allowed throws and error cannot access its functions directly, access only through instance

dog1 = new Dog("tommy", "sydney");
dog1.speak();
dog1.setLocation("melbourne");
dog1.speak();  // this variable refers to dog1 object


dog2 = new Dog("Harry", "Cationanberra");
dog2.speak();
dog2.setLocation("Perth");
dog2.speak();  //this refers to dog2 object

// ########################### ES6 class ###########################
var dogCount = 0;
class Dog {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    // static method gives access to class method without creating an instance
    dogCount = dogCount + 1;
  }
  static dogCount() {
      console.log(`total number of dogs: ${dogCount}`)
    }
  speak() {
    console.log(`whoof my name is ${this.name} and I am from ${this.location}`);
    // console.log(this);
  }
  setLocation(location) {
    this.location = location;
  }
}

Dog.prototype.walk = function(distance) {
  console.log(`${this.name} has covered ${distance} miles`);
} // only class can modify/update prototype property

var dog3 = new Dog("tommy", "sydney");
var dog4 = new Dog("twiggy", "mel");
var dog5 = new Dog("jonny", "Canberra");
dog3.speak();
dog3.setLocation("melbourne");
dog3.speak();
dog3.walk(10);  // object can access prototype property, cannot add or update any
Dog.dogCount();
