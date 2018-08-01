// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');

// run this code and click while long running function is executing: notice, click event gets registered only after finishing the js code. hence long runnning function cannot interrupt, while events occur.

// This is how js deals with async events, anything happening ouside of JE in browser is stored in Event que in JE
