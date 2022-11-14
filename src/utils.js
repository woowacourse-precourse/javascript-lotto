const isLengthError = (inputs) => inputs.length !== 6;
const isDuplicate = (inputs) => new Set(inputs).size !== inputs.length;
const isNotRightBonus = (luckyNumbers, bonusNumber) => luckyNumbers.includes(bonusNumber)


module.exports = {isDuplicate, isLengthError, isNotRightBonus};