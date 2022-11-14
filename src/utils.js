const {UNITS} = require('./constants')

const validator = {
  isNotRightPay: (pay) => pay % UNITS.LOTTO_PRICE !== 0,
  isLengthError: (inputs) => inputs.length !== UNITS.LIMIT_LOTTO,
  isDuplicate: (inputs) => new Set(inputs).size !== inputs.length,
  isNotRightBonus: (luckyNumbers, bonusNumber) => luckyNumbers.includes(bonusNumber),
  isDigitError: (inputs) => !(inputs.every((input) => input >= UNITS.MIN && input <= UNITS.MAX)),
  isNotIntegers: (inputs) => !(inputs.every((input) => Number.isInteger(input)))
};

module.exports = {validator};