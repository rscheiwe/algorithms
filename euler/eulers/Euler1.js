//number 1
function range(start, count) {
  return Array.apply(0, Array(count))
    .map((element, index) => index + start)
}

function multiples(number) {
  let store = []
  for (let x of range(1,number)) {
    if (x % 3 === 0 || x % 5 === 0) {
      store.push(x)
    }

  }
  return store.reduce((a,b) => a+b)
}

module.exports = multiples 
