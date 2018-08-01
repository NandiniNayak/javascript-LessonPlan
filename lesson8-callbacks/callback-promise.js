// https://javascript.info/callbacks
/* calllback functions are used, if a particular function execution takes time, then instead of waiting for it to complete. run the next set of instruction, if tehre is any function call or code has dependency on the results of teh first function, move it into the call back function, which gets executed, right after executing the first function

1. callback is a function passed as arguments
2. suffer from clarity
3. promises fetaures:
  3.1 execution guarantees
  3.2 easily chained

*/

loadScript('/my/script.js', function(script) {

  alert(`Cool, the ${script.src} is loaded, let's load one more`);

  loadScript('/my/script2.js', function(script) {
    alert(`Cool, the second script is loaded`);
  });

});


// pyramid of doom : promises are best way to avoid pyramid of doom
loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...continue after all scripts are loaded (*)
          }
        });
      }
    })
  }
});
