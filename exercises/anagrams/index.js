// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charMap(str, obj={}) {
  for (let char of str.replace(/[^\w]/g,"").toLowerCase()) {
    obj[char] ? obj[char] += 1 : obj[char] = 1
  }
  return obj
}

function anagrams(stringA, stringB) {

  let objA = charMap(stringA), objB = charMap(stringB)

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false
  }

  let aProps = Object.getOwnPropertyNames(objA),
        bProps = Object.getOwnPropertyNames(objB);

  for (let i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (objA[propName] !== objB[propName]) {
        return false;
    }
  }
  return true;

}

module.exports = anagrams;
