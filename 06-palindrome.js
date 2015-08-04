// Write a method that takes a string and returns true if it is a
// palindrome. A palindrome is a string that is the same whether written
// backward or forward. Assume that there are no spaces; only lowercase
// letters will be given.
//
// Difficulty: easy.

var palindrome = function (string) {
    var reversed = " ";
    for ( i = string.length ; i >= 0 ; i-- ) {
        reversed += string.charAt(i)
    }
    return reversed;
};

console.log(palindrome("mañana gödel"));
