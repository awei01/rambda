function find(fn, arr){
  if (arr === undefined) {
    return holder => find(fn, holder)
  }

  return arr.find(fn)
}

module.exports = find
