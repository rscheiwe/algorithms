const assert = require('assert')
const palindromeProd = require('../eulers/euler4.js')

describe('Test4', () => {
  it('Find the largest palindrome made from the product of two 3-digit numbers', () => {

    assert.equal(palindromeProd(13195), 29)
  })

})
