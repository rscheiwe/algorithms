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

function primeFactor(n) {
  let factors = []

  
}
