// function names "calculate sum"

// what should it do
  // - check if args were numbers
  // - it should add all numbers together
  // array -> single number ??? how ??
  // user reduce / or loop through input 

// what should the func output or return
  // - func output can be whole or decimal numbers

// what should the func take in
  // - array of nums


  // calculateSum([1,2,3,4]) // good

  // calculateSum(1,2,3,4) // bad

  // calculateSum("1",2,3,4) // bad

  // calculateSum("1", "2", "3", "4") // bad

let { calculateSum } = require('../src/calculateSum')



describe('calculateSum input functionality', () => {
  test('should only accept an array as input args', () => {

    expect(() => {
      calculateSum([1,2,3,4])
    }).not.toThrow()

    expect(() => {
      calculateSum([])
    }).not.toThrow()

    expect(() => {
      calculateSum(["hello", "world"])
    }).toThrow("not all elements in array are integers")

    expect(() => {
      calculateSum("[1,2,3,4]")
    }).toThrow("not all elements in array are integers")

    expect(() => {
      calculateSum(["1,2,3,4"])
    }).toThrow("not all elements in array are integers")

    expect(() => {
      calculateSum(["1",2,3,4])
    }).toThrow("not all elements in array are integers")

    expect(() => {
      calculateSum(["1","2","3","4"])
    }).toThrow("not all elements in array are integers")

  })

  test('should only generate numbers as output', () => {
    
    expect(calculateSum([1,2,3,4,5])).toEqual(15)

    expect(calculateSum([1.5,2.5,3.5])).toEqual(7.5)

  })
  
  
})
