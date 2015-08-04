// Write a method that takes a string and returns the number of vowels
// in the string. You may assume that all the letters are lower cased.
// You can treat "y" as a consonant.
//
// Difficulty: easy.

var countVowels = function (string) {
    var vowels = "aeiou";
    var array = [];
    for ( i = 0 ; i < string.length ; i ++ ) {
        if (vowels.indexOf(string.charAt(i)) > 0) {
            array.push(string.charAt(i))
        }
    }
    return array.length
};

console.log(countVowels("super"));
