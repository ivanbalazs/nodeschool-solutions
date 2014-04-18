
var http = require('http');
var urls = process.argv.slice(2);
var ret = [];
var finished = 0;

for (var i = 0; i < urls.length; i++) {
  (function(index) {
    http.get(urls[index], function(response) {
      response.setEncoding('utf8');

      response.on('data', function(data) {
        ret[index] = ret[index] ? ret[index] + data : data;
      });
      
      response.on('end', function() {
        if (++finished === urls.length) {
          ret.forEach(function(data) {
            console.log(data);
          });
        }
      })
    });
  })(i);
}
