// Write a method that takes a string in and returns true if the letter
// "z" appears within three letters **after** an "a". You may assume
// that the string contains only lowercase letters.
//
// Difficulty: medium.

var nearbyAZ = function (string) {
    for ( i = 0 ; i < string.length ; i ++ ) {
        if (string[i] === "a") {
            for (j = i; j < i+4; j++) {
                if (string[j] === "z")
                    return true;
            }
        }
    }
    return false;
};

console.log(nearbyAZ("iiaziii")); //--> true
console.log(nearbyAZ("iiaizii")); //--> true
console.log(nearbyAZ("iiaiizi")); //--> true
console.log(nearbyAZ("iiaiiiz")); //--> false
