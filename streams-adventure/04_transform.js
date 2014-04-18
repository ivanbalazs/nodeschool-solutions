
var through = require('through');

var tr = through(function(data) {
  this.queue(data.toString().toUpperCase());
}, function() {
  this.queue(null);
});

process.stdin.pipe(tr).pipe(process.stdout);
