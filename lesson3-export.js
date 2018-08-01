// notice how the symbols cannot be mutated, hence avoids overwriting from code in other files

// module.exports.symbolExample = createUserSymbol;
//
// function createUserSymbol(){
//   user = {name: "nandini"}
//   let id = Symbol( "id from another file");
//   user[id] = "id from another file";
//   return user[id];
// }
// #################string overwrites#########
  // test the same behavior for string
  module.exports.stringExample = createUserString;

  function createUserString(){
    user = {name: "nandini"}
    user["id"] = "id from another file";
    return user["id"];

  }
