const baseSlice = require("./baseSlice")

function takeLast(takeNumber, a) {
  if (a === undefined) {
    return holder => takeLast(takeNumber, holder)
  }
  const len = a.length
  takeNumber = takeNumber > len ?
    len :
    takeNumber

  if (typeof a === "string") {
    return a.slice(len - takeNumber)
  }
  takeNumber = len - takeNumber

  return baseSlice(a, takeNumber, len)
}

module.exports = takeLast
