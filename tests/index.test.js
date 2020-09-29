let { repeatMessage } = require('../src/index')

test("test-name", () => {
  expect("this is a truthy string").toBeTruthy()
})

test("repeatMessage functionality", () => {
  expect(repeatMessage("hello",3)).toEqual("hellohellohello")
  expect(repeatMessage("hello",0)).toEqual("")
  expect(repeatMessage("a",5)).toEqual("aaaaa")
})