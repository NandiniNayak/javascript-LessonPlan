// action similar to gets.chomp
console.log("What is your name.");
var name;
process.stdin.on('readable', function() {
    name = process.stdin.read();
    if (name !== null) {
        console.log(name);
        console.log(`Hello ${name} How are you`);
        console.log("Hello " + name + " How are you");
         // used to exit from the code
        // process.exit();
    }
});

// this could be a good example of callback function notice how the following code continues, while waiting for the name to be entered
console.log("something else happens while waiting for the name to be entered, due to callback function, hence not slowing up the process");

// also note how the timeout function  allows us to enter name, while waiting for 3 seconds
setTimeout(function(){
   console.log("Hello after 3 seconds");
 }, 3000);
