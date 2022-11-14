const { ERROR } = require("../constants/constants");

const validate = {
  moneyInput: (input) => {
    if (input % 1000 !== 0) throw new Error(ERROR.INVALID_MONEY_INPUT);
  },

  numbersOutput: (numbers) => {
    if (numbers.length !== 6) throw new Error(ERROR.INVALID_NUMBERS_OUTPUT_LENGTH);
    if (numbers.map((el) => Number(el)).every((el) => el >= 1 && el <= 45))
      throw new Error(ERROR.INVALID_NUMBERS_OUTPUT_RANGE);
    if ([...new Set(numbers)].length !== 6)
      throw new Error(ERROR.INVALID_NUMBERS_OUTPUT_UNIQUE);
  },
};

module.exports = validate;
