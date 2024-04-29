export const matchInterestValue = (firstArray, secondArray) => {
    const count = firstArray.reduce((acc, val) => (secondArray.includes(val) ? ++acc : acc), 0)

    return Math.round((count / Math.min(firstArray.length, secondArray.length)) * 100)
}
