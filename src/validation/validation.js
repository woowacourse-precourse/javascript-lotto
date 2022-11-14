const { ERROR } = require("../constants/constants");

const validate = {
  moneyInput: (input) => {
    if (input % 1000 !== 0) throw new Error(ERROR.INVALID_MONEY_INPUT);
  },

  winningNumbers: (numbers) => {
    if (numbers.length !== 6)
      throw new Error(ERROR.INVALID_WINNING_NUMBERS_LENGTH);
    if (!numbers.map((el) => Number(el)).every((el) => el >= 1 && el <= 45))
      throw new Error(ERROR.INVALID_WINNING_NUMBERS_RANGE);
    if ([...new Set(numbers)].length !== 6)
      throw new Error(ERROR.INVALID_WINNING_NUMBERS_UNIQUE);
  },

  bonusNumber: (number, winningNumbers) => {
    if (winningNumbers.includes(number))
      throw new Error(ERROR.INVALID_BONUS_NUMBER_UNIQUE);
    if (!(Number(number) >= 1 && Number(number) <= 45))
      throw new Error(ERROR.INVALID_BONUS_NUMBER_RANGE);
  },
};

module.exports = validate;
