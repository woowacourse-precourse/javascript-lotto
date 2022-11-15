const { NUMBER, LOTTO_PRICE_DATA } = require('../constants/value');
const { PRINT } = require('../constants/UI');

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

const printTickets = (tickets) => {
  PRINT.TICKETS_AMOUNT(tickets.length);
  tickets.forEach((lottery) => {
    PRINT.MY_TICKETS(lottery);
  });
};

module.exports = { printResult, printTickets };
