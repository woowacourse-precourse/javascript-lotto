const calculateLotteryTicketAmout = (money) => {
  const amount = money % 1000;
  return amount;
};

module.exports = calculateLotteryTicketAmout;
