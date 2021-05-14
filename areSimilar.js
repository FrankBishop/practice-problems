function areSimilar(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === i) {
    } else if (b.indexOf(a[i]) === -1) {
      return false
    } else {
      count += 1
    }
  }
  if (count > 2) {
    return false
  }
  return true
}

