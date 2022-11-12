const { EXCEPTION_REASON } = require('../constants/constants');

const isValidLottery = (lottery) => {
  let result = true;
  const checkLotteryLength = new Set(lottery).size;
  if (lottery.length !== 6) return EXCEPTION_REASON.INPUT_LENGTH_ERROR;
  if (checkLotteryLength < 6) return EXCEPTION_REASON.INPUT_OVERLAPPED;

  lottery.forEach((separateNumber) => {
    if (!Number.isInteger(separateNumber))
      result = EXCEPTION_REASON.INPUT_DECIMAL;
    if (isNaN(separateNumber)) result = EXCEPTION_REASON.INPUT_ERROR;
    if (separateNumber < 1 || separateNumber > 45)
      result = EXCEPTION_REASON.INPUT_ERROR;
  });
  return result;
};

module.exports = isValidLottery;
