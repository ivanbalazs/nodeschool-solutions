
var x = process.argv;

ret = 0;
for (var i = 2; i < x.length; i++) {
    ret += Number(x[i]);
}

console.log(ret);
