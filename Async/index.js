async function asyncSum(a, b) {
  return a + b
}

asyncSum(5, 5).then(result => console.log(`5 + 5 é igual: ${result}`))

async function asyncSubstract(a, b) {
  return a - b
}

asyncSubstract(10, 5).then(result => console.log(`10 - 5 é igual: ${result}`))

const numbers = [4, 9, 5, 13, 77]

async function asyncSquare(x) {
  return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
  console.log(squares)
})