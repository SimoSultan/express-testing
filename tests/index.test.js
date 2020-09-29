let { repeatMessage } = require('../src/index')

test("test-name", () => {
  expect("this is a truthy string").toBeTruthy()
})


describe('repeatMessage block of mult tests', () => {

  test("repeatMessage functionality", () => {
    expect(repeatMessage("hello",3)).toEqual("hellohellohello")
    expect(repeatMessage("hello",0)).toEqual("")
    expect(repeatMessage("a",5)).toEqual("aaaaa")
  })
  
  test('should be a function', () => {
    expect(typeof(repeatMessage)).toBe('function')
  })
  
})
