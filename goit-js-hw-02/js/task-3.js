function findLongestWord(string) {
    const arrayFromString = string.split(' ');
    console.log(arrayFromString)

    let longestWord = arrayFromString[0];

    for (const word of arrayFromString) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'