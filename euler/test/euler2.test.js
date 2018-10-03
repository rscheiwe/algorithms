const assert = require('assert')
const fiboEven = require('../eulers/euler2.js')

describe('Test2', () => {
  it('Sums the even Fibonacci terms whose value does not exceed 4,000,000', () => {

    assert.equal(fiboEven(10000), 4613732)
  })

})
