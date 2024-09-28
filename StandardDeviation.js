function stdDev(numbers) {
    const mean = a => a.reduce((acc, cur) => acc + cur / a.length, 0)
    const u = mean(numbers)
    const n = numbers.length
    return Math.sqrt(
        numbers.reduce(
            (accu, curr) => accu + (curr - u) ** 2 / n
            , 0
        )
    )
}
