function dropLast(dropNumber, a){
  if (a === undefined) {
    return holder => dropLast(dropNumber, holder)
  }

  return a.slice(0, -dropNumber)
}

module.exports = dropLast
