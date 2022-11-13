const {
  NAN_ERROR,
  REMAINDER_ERROR,
  COUNT_ERROR,
  RANGE_ERROR,
} = require("./Constants");

const checkNaN = (number) => {
  const check = /^[0-9]+$/;
  if (!check.test(number)) return true;
};

const checkRemainder = (number) => {
  if (parseInt(number) % 1000 !== 0) return true;
};

const checkPurchaseAmount = (number) => {
  if (checkNaN(number)) throw NAN_ERROR;
  if (checkRemainder(number)) throw REMAINDER_ERROR;
};

const checkSeparator = (numbers) => {};

const checkNumberCount = (numbers) => {
  if (numbers.length !== 6) return true;
};

const checkRange = (number) => {
  if (Number(number) < 1 || Number(number) > 45) return true;
};

const checkLottoNumbers = (numbers) => {
  const splitNumbers = numbers.split(",");
  if (checkNumberCount(splitNumbers)) throw COUNT_ERROR;
  for (const number of splitNumbers) {
    if (checkRange(Number(number))) throw RANGE_ERROR;
    if (checkNaN(Number(number))) throw NAN_ERROR;
  }
};

const checkBonusNumber = (number) => {
  if (checkNaN(number)) throw NAN_ERROR;
  if (checkRange(number)) throw RANGE_ERROR;
};

module.exports = {
  checkPurchaseAmount: checkPurchaseAmount,
  checkLottoNumbers: checkLottoNumbers,
  checkBonusNumber: checkBonusNumber,
};
