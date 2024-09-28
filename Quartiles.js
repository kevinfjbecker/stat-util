function quartiles(arr)
{
    const bottom = (a) => a.slice(0, Math.ceil((a.length - 1) / 2))
    const top = (a) => a.slice(Math.floor((a.length - 1) / 2) + 1)
    const median = (a) => (
        (a[Math.floor((a.length - 1) / 2)] + a[Math.ceil((a.length - 1) / 2)] ) / 2
    )
    
    const sortedArr = arr.toSorted((a, b) => a - b)
    
    return [
        median(bottom(sortedArr)),
        median(sortedArr),
        median(top(sortedArr))
    ]
}

function interquartileRange(arr)
{
    const q = quartiles(arr)
    return q[2] - q[0]
}
