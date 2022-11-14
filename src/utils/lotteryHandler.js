const { Random, Console } = require('@woowacourse/mission-utils');
const { LOTTO_PRICE_DATA, PRINT, NUMBER, STRING, BOOLEAN } = require('./constant');

const sortLotteryNumbers = (lotteryTicket) => {
  const sortedArray = lotteryTicket.sort((a, b) => a - b);
  return sortedArray;
};

const createLotteryTicket = () => {
  const lotteryTicket = Random.pickUniqueNumbersInRange(
    NUMBER.MIN_LOTTO_RANGE,
    NUMBER.MAX_LOTTO_RANGE,
    NUMBER.LOTTO_LENGTH,
  );
  const sortedLotteryTicket = sortLotteryNumbers(lotteryTicket);

  return sortedLotteryTicket;
};

const printMyLotteries = (lotteryTickets) => {
  PRINT.TICKETS_AMOUNT(lotteryTickets.length);
  lotteryTickets.forEach((lottery) => {
    Console.print(`[${lottery.join(STRING.COMMA_WITH_SPACE)}]`);
  });
};

const changeToNumbersArray = (stringInput) => {
  const stringsArray = stringInput.split(STRING.COMMA);
  const numbersArray = stringsArray.map((string) => Number(string));

  return numbersArray;
};

/* Check Lottery Result */
const checkLottery = (ticket, lottoNumbers, bonusNumber) => {
  let count = NUMBER.DEFAULT_COUNT;
  let getBonus = BOOLEAN.DEFAULT_BONUS;

  ticket.forEach((ticketNumber) => {
    if (lottoNumbers.includes(ticketNumber)) {
      count += NUMBER.COUNT_UNIT;
    }

    if (ticketNumber === bonusNumber) {
      getBonus = BOOLEAN.GET_BONUS;
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
    if (count === NUMBER.GET_THREE) return (winTickets.getThree.amount += 1);
    if (count === NUMBER.GET_FOUR) return (winTickets.getFour.amount += 1);
    if (count === NUMBER.GET_FIVE && getBonus) return (winTickets.getFiveAndBonus.amount += 1);
    if (count === NUMBER.GET_FIVE) return (winTickets.getFive.amount += 1);
    if (count === NUMBER.GET_SIX) return (winTickets.getSix.amount += 1);
  });

  return winTickets;
};

const getTotalRevenue = (winTickets) => {
  const totalRevenue = Object.entries(winTickets).reduce((acc, [_, ticket]) => {
    const revenue = ticket.amount * ticket.price;
    return revenue + acc;
  }, NUMBER.DEFAULT_REVENUE);

  return totalRevenue;
};

const getRevenueRate = (winTickets, cost) => {
  const totalRevenue = getTotalRevenue(winTickets);
  const numerator = Math.round((totalRevenue * NUMBER.REVENUE_CONSTANT) / cost);
  const revenueRate = numerator / NUMBER.RATE_CONSTANT;

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
