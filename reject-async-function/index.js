async function sumNumbers(a, b) {
 
  return a + b
}

function substract(a, b) {
  if ( typeof a !== 'number' || typeof b !== 'number') {
    return Promise.reject('argments must be of type number')
  }
  return a - b
}

const sumResult = sumNumbers(10, 5)
const substractResult = substract(20, null)

Promise.all([sumResult, substractResult]).then(results => {
  console.log(results)
}).catch (err => {
  console.log(err)
})