
var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();

process.stdin.pipe(tr).pipe(process.stdout);

var loudCss = tr.select('.loud').createStream();

loudCss.pipe(through(function(data){
  this.queue(data.toString().toUpperCase());
})).pipe(loudCss);
