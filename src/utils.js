const {UNITS} = require('./constants')

const validator = {
  isLengthError: (inputs) => inputs.length !== UNITS.LIMIT_LOTTO,
  isDuplicate: (inputs) => new Set(inputs).size !== inputs.length,
  isNotRightBonus: (luckyNumbers, bonusNumber) => luckyNumbers.includes(bonusNumber),
  isDigitError: (inputs) => !(inputs.every((input) => input >= UNITS.MIN && input <= UNITS.MAX))
}


module.exports = {validator};