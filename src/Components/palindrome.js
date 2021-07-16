const isPalindrome = (event) => {
    let word = event;
    // Find any character that is NOT between the brackets. This is performed multiple times by performing a global match.
    let regex = /[^a-zA-Z0-9]/gi;
    // Remove all characters in word that are outside of the above regex and place them next within the sequence. Any word with a whitespace will also be removed.
    word = word.toLowerCase().replace(regex, "");
    // reverse() is an array function and this is why we use split() to copy the string into an array. The array is reversed and then use join to return the array as a string.
    let reversedWord = word.split("").reverse().join("");
    // Simple strict equality check to ensure the original word and the reversed word matches.
    return word === reversedWord;
}

module.exports = isPalindrome;