
var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, files) {
  if (err) throw err;

  var regex = new RegExp('\.' + ext + '$');
  files.forEach(function(file) {
    if (!ext || file.match(regex)) {
      console.log(file);
    }
  })
});
