function weightedMean(values, weights)
{
  const n = values.length
  let ret = 0
  for(let i = 0; i < n; i++)
  {
    ret += values[i] * weights[i] / weights.reduce((a, b) => a + b, 0)
  }
  return ret
}
