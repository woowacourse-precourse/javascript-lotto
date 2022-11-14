const { LOTTO_RANGE_REGEX } = require('../constants');

const checkWinningIncludeBonus = (winningNumbers, bonus) => {
  console.log(winningNumbers.includes(bonus));
  if (winningNumbers.includes(bonus)) {
    return true;
  }
  return false;
};

const checkBonusRange = (bonus) => {
  if (!LOTTO_RANGE_REGEX.test(bonus)) {
    return true;
  }
  return false;
};

module.exports = { checkWinningIncludeBonus, checkBonusRange };
