
var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var u = url.parse(req.url, true);
  var urlMatch = u.pathname.match(/^\/api\/(parse|unix)time$/)
  if (urlMatch) {
    if (!u.query.iso) {
      res.end('Please provide the iso parameter');
    }
    var d = new Date(u.query.iso);
    var ret = urlMatch[1] === 'parse'
      ? { hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds() }
      : { unixtime: d.getTime() }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(ret));
    return;
  }

  res.writeHead(404);
  res.end();
});
  
server.listen(process.argv[2]);
