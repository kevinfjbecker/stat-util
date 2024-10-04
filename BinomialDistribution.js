const factorial = (x) =>
{
    let n = x
    let r = 1
    while(n > 1)
    {
        r *= n--
    }
    return r
}

const permutations = (n, r) => factorial(n) / factorial(n - r)

const combinations = (n, r) => factorial(n) / (factorial(r) * factorial(n - r))

const binomial = (x, n, p) =>
    combinations(n, x) * p ** x * (1 - p) ** (n - x)

const ratioToProbability = (a, b) => a / (a + b)

const cumulativeProbability = (
    probabilityOfSuccess,
    totalNumberOfTrials,
    minNumberOfSuccesses,
    maxNumberOfSuccesses
) =>
{
    let totalProbability = 0
    for(let i = minNumberOfSuccesses; i <= maxNumberOfSuccesses; i++)
    {
        totalProbability += binomial(i, totalNumberOfTrials, probabilityOfSuccess)
    }
    return totalProbability
}

/**
 * An Example
 * 
 * Given the ratio of success to failure as 1.09:1
 * What is the probablity of get at least 3 successes over 6 tests?
 */

// const ratioString = '1.09 1'
// const a = + ratioString.split(' ')[0]
// const b = + ratioString.split(' ')[1]

// console.log(a, b)

// const trials = 6
// const p = ratioToProbability(a, b)
// const minSuccess = 3
// const maxSuccess = 6

// console.log(cumulativeProbability(
//     p,
//     trials,
//     minSuccess,
//     maxSuccess
// ).toFixed(3))
