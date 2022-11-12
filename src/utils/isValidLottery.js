const isValidLottery = (lottery) => {
  const checkLotteryLength = new Set(lottery).size;
  if (checkLotteryLength !== 6) return false;
  for (let lotteryIndex = 0; i < lottery.length; lotteryIndex += 1) {
    if (isNaN(lottery[lotteryIndex])) return false;
  }
  return true;
};

module.exports = isValidLottery;
