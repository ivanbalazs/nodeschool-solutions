
var fs = require('fs');

var f = fs.readFileSync(process.argv[2]);

var str = f.toString().split("\n");

console.log(str.length - 1);
