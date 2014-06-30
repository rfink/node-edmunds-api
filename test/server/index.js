
/* ~ Deps ~ */

var http = require('http');

/* ~ Locals ~ */

var server = module.exports = http.createServer();
var fileName = null;

server.setFileName = function setFileName(fName) {
  fileName = fName;
};

server.on('request', function(req, res) {
  var response = require(__dirname + '/responses/' + fileName.toLowerCase());
  res.setHeader('Content-Type', 'application/json');
  return res.end(JSON.stringify(response));
});
