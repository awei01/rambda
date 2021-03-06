function drop(dropNumber, a){
  if (a === undefined) {
    return holder => drop(dropNumber, holder)
  }

  return a.slice(dropNumber)
}

module.exports = drop
