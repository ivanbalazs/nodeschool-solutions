var http = require('http');
var through = require('through');

http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function(data) {
      this.queue(data.toString().toUpperCase());
    })).pipe(res);
  } else {
    res.end('Only POST is accepted');
  }
}).listen(process.argv[2]);
