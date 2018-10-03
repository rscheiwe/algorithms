const assert = require('assert')
const euler1 = require('../eulers/Euler1.js')


describe('Test1', () => {
  it('adds divisibles of 3 and 5 below a certain number', () => {

    assert.equal(euler1(9), 23)
  })

})
