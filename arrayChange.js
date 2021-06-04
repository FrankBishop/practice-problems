function arrayChange(series) {
  let moves = 0;

  for (let i = 1; i < series.length; i++) {
    if (series[i] <= series[i - 1]) {
      const difference = series[i - 1] - series[i] + 1;
      series[i] += difference;
      moves += difference;
    }
  }

  return moves;
}
