// step1: update only tye li's with json data

// var request = fetchUpdateAjaxData();
// var request = new XMLHttpRequest();
// // get request from test/data
// // request.open('GET', 'test/page');
// request.open('GET', 'test/data');
// // check if it is in the ready state, which indicates server is sending data
// // request.onreadyStateChange was not changing readyState to 4, hence change it to onload
// request.onload = function() {
//   if((request.readyState === 4) && (request.status === 200)){
//       var modify = document.getElementsByTagName('li');
//       // update only the third li upon refresh
//       modify[2].innerHTML = request.responseText;
//       // update every li
//       for(let i in modify) {
//         modify[i].innerHTML = request.responseText;
//       }
//   }
// }
// request.send();

// uncomment step1: to demostarte update of li: on refersh
// uncomment step2: to demostarte update of div on event clcik

// step2: load data upon click of the button: i.e upon an event
function loadAjax() {
  // var request = fetchUpdateAjaxData();
  var request = new XMLHttpRequest();
  // get request from test/data
  // request.open('GET', 'test/page');
  request.open('GET', 'test/data');
  // check if it is in the ready state, which indicates server is sending data
  // request.onreadyStateChange was not changing readyState to 4, hence change it to onload
  request.onload = function() {
    if((request.readyState === 4) && (request.status === 200)){
        console.log(request);
        var json_data = request.responseText.split("body>")
        var final_json = json_data[1].split("<")[0]
        console.log(final_json);
        var items = JSON.parse(final_json);
        console.log(items);
        var output = '</ul>';
        for (var key in items){
          output += '<li>' + items[key]+ '</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML = output;
    }
  }
  request.send();
}
