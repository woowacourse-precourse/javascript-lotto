const { CORRECT_NUMBER } = require('../../constants/constants');

const processLotteryRank = (countResult, bonusResult) => {
  let result = countResult + bonusResult;

  if (result === 6) if (bonusResult === 0) result += 1;
  return String(CORRECT_NUMBER[result]);
};

module.exports = processLotteryRank;
