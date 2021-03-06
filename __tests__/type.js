const R = require("../rambda")

describe("type", () => {
  it("", () => {
    const fn1 = () => {}
    const fn2 = function () {}
    function fn3 () {}
    [
      () => {},
      fn1,
      fn2,
      fn3,
    ].map(val => {
      expect(
        R.type(val)
      ).toEqual("Function")
    })

    async function fn4 () {
      const a = await R.add(1, 2)

      return a
    }

    [
      async () => {},
      fn4,
    ].map(val => {
      expect(
        R.type(val)
      ).toEqual("Async")
    })

    expect(
      R.type({})
    ).toEqual("Object")

    expect(
      R.type(1)
    ).toEqual("Number")

    expect(
      R.type(false)
    ).toEqual("Boolean")

    expect(
      R.type("foo")
    ).toEqual("String")

    expect(
      R.type(null)
    ).toEqual("Null")

    expect(
      R.type([])
    ).toEqual("Array")

    expect(
      R.type(/\s/g)
    ).toEqual("RegExp")

    expect(
      R.type(undefined)
    ).toEqual("Undefined")
  })
})
