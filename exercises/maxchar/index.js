// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


//also frequently used for Anagram questions

function maxChar(str) {
  let letters = {}
  for (let char of str) {
    //letters[char] = letters[char] + 1 || 1
    letters[char] ? letters[char] += 1 : letters[char] = 1
  }
  return Object.keys(letters).reduce((a,b) => letters[a] > letters[b] ? a : b)
}

//a looping solution to find the max value in "letters"
//let max = 0
//let maxChar = ''
//for (let char in letters) {
//  if (letters[char] > max) {
      //max = letters[char]
      //maxChar = char
// }
// }

module.exports = maxChar;
