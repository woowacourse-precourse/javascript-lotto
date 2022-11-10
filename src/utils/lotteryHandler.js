const { Random } = require('@woowacourse/mission-utils');

const sortLotteryNumbers = (lotteryTicket) => {
  const sortedArray = lotteryTicket.sort((a, b) => a - b);
  return sortedArray;
};

const createLotteryTicket = () => {
  const lotteryTicket = Random.pickUniqueNumbersInRange(1, 45, 6);
  const sortedLotteryTicket = sortLotteryNumbers(lotteryTicket);

  return sortedLotteryTicket;
};

module.exports = { sortLotteryNumbers, createLotteryTicket };
