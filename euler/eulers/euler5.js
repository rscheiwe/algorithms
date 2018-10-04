/*
projecteuler.net
Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

//Helper function for LCM
function gcd(a,b) {
  if (b == 0) {
    return a
  } else {
    return gcd(b, a % b)
  }
 }

 function lcm(a,b) {
   return (a*b / gcd(a,b))
 }

gcd(175, 105)
