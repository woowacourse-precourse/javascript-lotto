const { ERROR_MESSAGE } = require("./Constant");

const existNoNumberAndComma = (answer) => {
  const exceptNumberAndComma = /[^0-9|^,]/;
  if (exceptNumberAndComma.test(answer)) return true;
  return false;
};

const existNoNumber = (answer) => {
  const exceptNumber = /[^0-9]/;
  if (exceptNumber.test(answer)) return true;
  return false;
};

const isOutOfRangeOneToFortyFive = (array) => {
  if (array.find((number) => number < 1 || number > 45) !== undefined)
    return true;
  return false;
};

const existDuplicatedNumber = (array) => {
  const set = new Set(array);
  if (array.length !== set.size) return true;
  return false;
};

const Validate = {
  checkMultipleOf1000(answer) {
    if (answer % 1000 !== 0)
      throw new Error(ERROR_MESSAGE.ONLY_MULTIPLE_OF_1000);
  },

  checkWinningNumber(answer) {
    if (existNoNumberAndComma(answer))
      throw new Error(ERROR_MESSAGE.ONLY_NUMBER_AND_COMMA);

    const splitedNumbers = Array.from(answer.split(","), Number);

    if (splitedNumbers.length !== 6)
      throw new Error(ERROR_MESSAGE.LOTTO_LENGTH_MUST_6);

    if (isOutOfRangeOneToFortyFive(splitedNumbers))
      throw new Error(ERROR_MESSAGE.LOTTO_RANGE_MUST_1_TO_45);

    if (existDuplicatedNumber(splitedNumbers))
      throw new Error(ERROR_MESSAGE.NO_DUPLICATE_NUMBER);
  },

  checkBonusNumber(winningNumber, answer) {
    if (existNoNumber(answer)) throw new Error(ERROR_MESSAGE.ONLY_NUMBER);

    if (answer < 1 || answer > 45)
      throw new Error(ERROR_MESSAGE.LOTTO_RANGE_MUST_1_TO_45);

    if (winningNumber.includes(parseInt(answer, 10)))
      throw new Error(ERROR_MESSAGE.NO_DUPLICATE_NUMBER);
  },
};

module.exports = Validate;
