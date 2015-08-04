// Write a method that will take in a number of minutes, and returns a
// string that formats the number into `hours:minutes`.
//
// Difficulty: easy.

var timeConversion = function (minutes) {
    var mm = minutes % 60;
    var hh = Math.floor(minutes / 60);

    if (mm.toString.length === 1)
        mm = "0" + mm;
    if (hh.toString.length === 1)
        hh = "0" + hh;
    return hh + ":" + mm;
};

console.log(timeConversion(241))
