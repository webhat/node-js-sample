var testprime = function (n) {
    var sq = Math.ceil(Math.sqrt(n));
    if (n < 4)
        return true;

    if (n % 2 == 0)
        return false;

    for (sq; sq > 1; sq--) {
        //console.log(n + ": " + n % sq);
        if (n % sq == 0) {
            return false;
        }
    }

    return true;
};

var getprimes = function (k) {
    var i = 1;
    var arr = [];
    for (i = 1; i < k + 1; i++) {
        if (testprime(i))
            arr.push(i);
    }
    return arr;
};

// Print to console
var fmt = function (arr) {
    return arr.join(",");
};

var k = 542;
console.log("getprimes(" + k + ")");
console.log(fmt(getprimes(k)));
