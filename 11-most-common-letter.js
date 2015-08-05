// Write a method that takes in a string. Your method should return the
// most common letter in the array, and a count of how many times it
// appears.
//
// Difficulty: medium.

var mostCommonLetter = function() {

    var string = prompt("ENTER A STRING OF CHARACTERS TO ANALYZE.");
  
    var characters = [];
    for (i = 0 ; i < string.length ; i ++) {
        characters.push(string.charAt(i));
    }

    var charObj = {};
    for ( i = 0 ; i < characters.length ; i ++ ) {
      var num = characters[i];
      charObj[num] = charObj[num] ? charObj[num] + 1 : 1;
    }

    var objArr = [];
    for (var letter in charObj) {
      objArr.push([letter, charObj[letter]]);
    }

    objArr.sort(function(a, b){
      return b[1]-a[1];
    });

    console.log("STRING TO BE ANALYZED: " + string + "\n" +
                "LETTER WHICH OCCURS THE MOST: " + objArr[0][0] + "\n" +
                "NUMBER OF OCCURRENCE: " + objArr[0][1]);
};

mostCommonLetter("supercalifragilisticexpealodocious");
