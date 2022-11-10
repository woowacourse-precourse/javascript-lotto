const sortLotteryNumbers = (lotteryTicket) => {
  const sortedArray = lotteryTicket.sort((a, b) => a - b);
  return sortedArray;
};

module.exports = { sortLotteryNumbers };
