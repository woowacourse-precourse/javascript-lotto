const rangeCheck = (numbers) => {
    return numbers.every((number) => number >= 1 && number <= 45)
}

const repeatedCheck = (numbers) => {
    const numbersCheck = new Set(numbers)
    return numbersCheck.size === numbers.length
}
