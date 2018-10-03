const assert = require('assert')
const multiples = require('../eulers/Euler1.js')


describe('Test1', () => {
  it('adds divisibles of 3 and 5 below a certain number', () => {

    assert.equal(multiples(9), 23)
  })

})
