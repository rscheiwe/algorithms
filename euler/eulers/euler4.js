/*
projecteuler.net
Problem 4

A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

*/

function palindromeProd() {
  let palindromes = []
  for (let i = 999; i > 900; i--) {
    for (let j = 999; j > 900; j--) {
      let prod = i * j
      let splitProd = prod.toString().split('')
      if (splitProd.join() === splitProd.reverse().join()) {
        palindromes.push(prod)
        // console.log(splitProd.join())
      }
    }
  }
  return Math.max(...palindromes)
}

palindromeProd()


// module.exports = palindromeProd
