/*
projecteuler.net
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

Key here is that we need to check the divisor starting with 2 to the square root of the input number.

Divide the number with 2 till the remainder is not 0.
==>If its divisible with 2 then 2 to the primeFactors array.
Divide the number starting with 3 till the square root of the input number.
==>If its divisible with number then add to the primeFactors array.
At the end of the for loop if the number is greater than 2 then add the number to the primeFactors array.
*/

var getPrimeFactors = function(number) {
    var i = 2;
    var limit = Math.floor(number/2);
    var factors = [];
    while (i < limit) {
        // Check if number is divisible by i, if yes add i to list of factors and repeat
        // (There can be multiple prime factors of the same value, e.g. 12=2*2*3)
        while (number % i === 0) {
            number /= i;
            factors.push(i);

        }
        i++;
        // Lower the limit so the loop does only run as long as necessary
        limit = Math.floor(number/2);
    }
    // After going through all the lower numbers, the remaining on must be (?) prime
    factors.push(number);
    return Math.max.apply(null,factors);
}

module.exports = getPrimeFactors
//
// function primeFactor(n) {
//   let factors = []
//   while (n % 2 === 0) {
//     factors.push(2)
//     n = n/2
//   }
//
//   let sqrtNum = Math.sqrt(n);
//   for (let i = 3; i <= sqrtNum; i++) {
//     while (n % i === 0) {
//       factors.push(i)
//       i++
//     }
//   }
//
//   if (n > 2) {
//     factors.push(n)
//   }
//
//   return factors
//
// }
