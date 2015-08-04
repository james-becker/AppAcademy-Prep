/**
 * Created by jbecker on 8/3/15.
 */


// Write a method that takes in a string. Return the longest word in
// the string. You may assume that the string contains only letters and
// spaces.
//
// You may use the String `split` method to aid you in your quest.
//
// Difficulty: easy.

function longestWord (sentence) {
    array = sentence.split(" ");
    array.sort(function ( a , b ) {return b.length - a.length});
    return array[0]
}

console.log(longestWord("This is the longest superkalifragilistic in this function"));
