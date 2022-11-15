const { ERROR_MESSAGE } = require('../../constant/constant');

const examineCountLotto = (lotto) => {
  let result = true;
  const checkLength = new Set(lotto).size;
  if (lotto.length !== 6) return ERROR_MESSAGE.INPUT_LENGTH;
  if (checkLength < 6) return ERROR_MESSAGE.INPUT_TWICE;

  lotto.forEach((ripNum) => {
    if (!Number.isInteger(ripNum))
      result = ERROR_MESSAGE.INPUT_NUMBER;
    if (Number.isNaN(ripNum)) result = ERROR_MESSAGE.INPUT_ERROR;
    if (ripNum < 1 || ripNum > 45)
      result = ERROR_MESSAGE.INPUT_ERROR;
  });
  return result;
};

module.exports = examineCountLotto;
