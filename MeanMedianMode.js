function mean(numbers) {
  return numbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue / numbers.length
      , 0
  )
}

function median(numbers) {
  return ((
      numbers[Math.floor((numbers.length - 1) / 2)] +
      numbers[Math.ceil((numbers.length - 1) / 2)]
  ) / 2)
}

function mode(numbers) {
  const counts = {}
  numbers.forEach(n => counts[n] = counts[n] ? counts[n] + 1 : 1)
  const numbersCounts = Object.entries(counts)
  return numbersCounts.sort((a, b) => {
      if(b[1] - a[1] === 0)
      {
          return a[0] - b[0]
      }
      return b[1] - a[1]
  })[0][0]
}
