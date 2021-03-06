const R = require("../rambda")

describe("pick", () => {
  it("", () => {
    expect(
        R.pick(
          [ "a", "c" ]
        )({
          a : "foo",
          b : "bar",
          c : "baz",
        })
      ).toEqual({
        a : "foo",
        c : "baz",
      })

    expect(
        R.pick(
          [ "a", "d", "e", "f" ]
        )({
          a : "foo",
          b : "bar",
          c : "baz",
        })
      ).toEqual({ a : "foo" })
  })
})
