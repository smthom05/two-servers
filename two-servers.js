const http = require("http");

let PORT1 = 7000;
let PORT2 = 7500;


function handleRequest1(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
};

function handleRequest2(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}


var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);


server1.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
  console.log("You're Awesome!")
});

server2.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
  cosnole.log("You Suck!")
});
