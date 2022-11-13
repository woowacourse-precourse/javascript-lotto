const { Random, Console } = require('@woowacourse/mission-utils');
const { LOTTO_PRICE_DATA, PRINT } = require('./constant');

const sortLotteryNumbers = (lotteryTicket) => {
  const sortedArray = lotteryTicket.sort((a, b) => a - b);
  return sortedArray;
};

const createLotteryTicket = () => {
  const lotteryTicket = Random.pickUniqueNumbersInRange(1, 45, 6);
  const sortedLotteryTicket = sortLotteryNumbers(lotteryTicket);

  return sortedLotteryTicket;
};

const printMyLotteries = (lotteryTickets) => {
  PRINT.TICKETS_AMOUNT(lotteryTickets.length);
  lotteryTickets.forEach((lottery) => {
    Console.print(`[${lottery.join(', ')}]`);
  });
};

const changeToNumbersArray = (stringInput) => {
  const stringsArray = stringInput.split(',');
  const numbersArray = stringsArray.map((string) => Number(string));

  return numbersArray;
};

/* Check Lottery Result */
const checkLottery = (ticket, lottoNumbers, bonusNumber) => {
  let count = 0;
  let getBonus = false;

  ticket.forEach((ticketNumber) => {
    if (lottoNumbers.includes(ticketNumber)) {
      count += 1;
    }

    if (ticketNumber === bonusNumber) {
      getBonus = true;
    }
  });

  return { count, getBonus };
};

const getLotteryResult = (tickets, numbers, bonusNumber) => {
  const totalResult = [];
  tickets.forEach((ticket) => {
    const lotteryResult = checkLottery(ticket, numbers, bonusNumber);
    totalResult.push(lotteryResult);
  });

  return totalResult;
};

/* Print Total Result */
const checkWinTickets = (totalResult) => {
  const winTickets = { ...LOTTO_PRICE_DATA };
  totalResult.forEach(({ count, getBonus }) => {
    if (count === 3) return (winTickets.getThree.amount += 1);
    if (count === 4) return (winTickets.getFour.amount += 1);
    if (count === 5 && getBonus) return (winTickets.getFiveAndBonus.amount += 1);
    if (count === 5) return (winTickets.getFive.amount += 1);
    if (count === 6) return (winTickets.getSix.amount += 1);
  });

  return winTickets;
};

const getTotalRevenue = (winTickets) => {
  const totalRevenue = Object.entries(winTickets).reduce((acc, [_, ticket]) => {
    const revenue = ticket.amount * ticket.price;
    return revenue + acc;
  }, 0);

  return totalRevenue;
};

const getRevenueRate = (winTickets, cost) => {
  const totalRevenue = getTotalRevenue(winTickets);
  const revenueRate = Math.round((totalRevenue * 1000) / cost) / 10;

  return revenueRate;
};

const printResult = (totalResult, cost) => {
  const winTickets = checkWinTickets(totalResult);
  const revenueRate = getRevenueRate(winTickets, cost);
  PRINT.HEADER();
  PRINT.LINE();
  PRINT.GET_THREE(winTickets.getThree.amount);
  PRINT.GET_FOUR(winTickets.getFour.amount);
  PRINT.GET_FIVE(winTickets.getFive.amount);
  PRINT.GET_FIVE_AND_BONUS(winTickets.getFiveAndBonus.amount);
  PRINT.GET_SIX(winTickets.getSix.amount);
  PRINT.REVENUE_RATE(revenueRate);
};

module.exports = {
  sortLotteryNumbers,
  createLotteryTicket,
  printMyLotteries,
  changeToNumbersArray,
  getLotteryResult,
  printResult,
};
