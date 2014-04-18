
var through = require('through');
var split = require('split');
var i = 1;

var tr = through(function(data) {
  var out = (i++ % 2 ? data.toString().toLowerCase() : data.toString().toUpperCase()) + '\n';
  this.queue(out);
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
