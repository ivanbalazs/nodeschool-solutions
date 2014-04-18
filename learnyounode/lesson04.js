
var fs = require('fs');

var f = fs.readFile(process.argv[2], { encoding: 'utf8' }, function(err, data) {
    if (err) throw err;
    var len = data.split('\n').length - 1;
    
    console.log(len);
});
