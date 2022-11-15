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

const checkNumberCount = (numbers) => {
  if (numbers.length !== 6) return true;
};

const checkRange = (number) => {
  if (Number(number) < 1 || Number(number) > 45) return true;
};

const checkOverlap = (numbers) => {
  if (numbers.size !== 6) return true;
};

const checkLottoNumbers = (numbers) => {
  if (checkNumberCount(numbers)) throw INPUT_ERROR_MESSAGE.COUNT_ERROR;
  for (const number of numbers) {
    if (checkRange(Number(number))) throw INPUT_ERROR_MESSAGE.RANGE_ERROR;
    if (checkNaN(Number(number))) throw INPUT_ERROR_MESSAGE.NAN_ERROR;
  }
  if (checkOverlap(new Set(numbers))) throw INPUT_ERROR_MESSAGE.OVERLAP_ERROR;
};

const checkBonusInWinningNumbers = (winningNumbers, bonusNumber) => {
  if (winningNumbers.includes(bonusNumber)) return true;
};

const checkBonusNumber = (winningNumbers, bonusNumber) => {
  if (checkNaN(bonusNumber)) throw INPUT_ERROR_MESSAGE.NAN_ERROR;
  if (checkRange(bonusNumber)) throw INPUT_ERROR_MESSAGE.RANGE_ERROR;
  if (checkBonusInWinningNumbers(winningNumbers, bonusNumber))
    throw INPUT_ERROR_MESSAGE.BONUS_OVERLAP_ERROR;
};

module.exports = {
  checkPurchaseAmount: checkPurchaseAmount,
  checkLottoNumbers: checkLottoNumbers,
  checkBonusNumber: checkBonusNumber,
};
