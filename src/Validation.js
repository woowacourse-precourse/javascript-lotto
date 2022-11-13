const { INPUT_ERROR_MESSAGE } = require("./Constants");

const checkNaN = (number) => {
  const check = /^[0-9]+$/;
  if (!check.test(number)) return true;
};

const checkRemainder = (number) => {
  if (parseInt(number) % 1000 !== 0) return true;
};

const checkPurchaseAmount = (number) => {
  if (checkNaN(number)) throw INPUT_ERROR_MESSAGE.NAN_ERROR;
  if (checkRemainder(number)) throw INPUT_ERROR_MESSAGE.REMAINDER_ERROR;
};

const checkSeparator = (numbers) => {};

const checkNumberCount = (numbers) => {
  if (numbers.length !== 6) return true;
};

const checkRange = (number) => {
  if (Number(number) < 1 || Number(number) > 45) return true;
};

const checkLottoNumbers = (numbers) => {
  if (checkNumberCount(numbers)) throw INPUT_ERROR_MESSAGE.COUNT_ERROR;
  for (const number of numbers) {
    if (checkRange(Number(number))) throw INPUT_ERROR_MESSAGE.RANGE_ERROR;
    if (checkNaN(Number(number))) throw INPUT_ERROR_MESSAGE.NAN_ERROR;
  }
};

const checkBonusNumber = (number) => {
  if (checkNaN(number)) throw INPUT_ERROR_MESSAGE.NAN_ERROR;
  if (checkRange(number)) throw INPUT_ERROR_MESSAGE.RANGE_ERROR;
};

module.exports = {
  checkPurchaseAmount: checkPurchaseAmount,
  checkLottoNumbers: checkLottoNumbers,
  checkBonusNumber: checkBonusNumber,
};
