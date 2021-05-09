function alternatingSums(a) {
  let team1 = [];
  let team2 = [];
  let twoSums = [];
  let sum1 = 0
  let sum2 = 0
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1.push(a[i])
    }
  }
  for (i = 0; i < a.length; i++) {
    if (i % 2 !== 0) {
      team2.push(a[i])
    }
  }
  for (i = 0; i < team1.length; i++) {
    sum1 += team1[i]
  }
  for (i = 0; i < team2.length; i++) {
    sum2 += team2[i]
  }
  twoSums.push(sum1)
  twoSums.push(sum2)
  return twoSums
}
