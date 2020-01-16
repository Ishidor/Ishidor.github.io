const assert = require('assert')

const pushNumber = (list, number) => list.push(number)

let numbers = []

setTimeout(() => pushNumber(numbers, 1), 50)
pushNumber(numbers, 2)
pushNumber(numbers, 3)

assert.deepEqual(numbers, [1, 2, 3]) // essa validação falha
