const { REWARD_ARRAY } = require('../constants');

const convertAnswerIntoArray = (answer) => {
  return answer.split(',').map((item) => Number(item));
};

const getRevenue = (winningArray) => {
  return winningArray.reduce((acc, value, index) => {
    if (value !== 0) {
      return acc + value * REWARD_ARRAY[index];
    }
    return acc;
  }, 0);
};

const getRateOfReturn = (revenue, purchaseMoney) => {
  return ((revenue / purchaseMoney) * 100).toFixed(1);
};

module.exports = { convertAnswerIntoArray, getRevenue, getRateOfReturn };
