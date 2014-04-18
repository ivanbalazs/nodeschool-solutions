
var http = require('http');

var str = '';
http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    str += data;
  });
  response.on('end', function(data) {
    console.log(str.length);
    console.log(str);
  })
});
