const assert = require('assert')
const largestPrime = require('../eulers/euler3.js')

describe('Test3', () => {
  it('find the largest prime number for a given value', () => {

    assert.equal(largestPrime(10000), 4613732)
  })

})
