const assert = require('assert')
const getPrimeFactors = require('../eulers/euler3.js')

describe('Test3', () => {
  it('find the largest prime number for a given value', () => {

    assert.equal(getPrimeFactors(13195), 29)
  })

})
