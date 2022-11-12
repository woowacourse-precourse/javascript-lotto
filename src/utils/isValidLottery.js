const { EXCEPTION_REASON } = require('../constants/constants');

const isValidLottery = (lottery) => {
  const checkLotteryLength = new Set(lottery).size;
  if (checkLotteryLength !== 6) return EXCEPTION_REASON.INPUT_LENGTH_ERROR;
  for (let lotteryIndex = 0; lotteryIndex < lottery.length; lotteryIndex += 1) {
    if (isNaN(lottery[lotteryIndex])) return EXCEPTION_REASON.INPUT_OVERLAPPED;
  }
  return true;
};

module.exports = isValidLottery;
