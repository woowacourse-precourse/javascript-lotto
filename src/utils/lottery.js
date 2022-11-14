const MissionUtils = require('@woowacourse/mission-utils');
const { TICKET_PRICE, ERROR_MESSAGE } = require('./CONSTANT');
const { convertNumberToComma } = require('./string');

const figureLotteryRank = (hit, bonus) => {
  if (hit === 6) {
    return 'FIRST';
  }
  if (hit === 5 && bonus === true) {
    return 'SECOND';
  }
  if (hit === 5) {
    return 'THIRD';
  }
  if (hit === 4) {
    return 'FOURTH';
  }
  if (hit === 3) {
    return 'FIFTH';
  }
  return null;
};

const validateMoney = (money) => {
  if (Number.isNaN(money)) {
    throw Error(`[ERROR] ${ERROR_MESSAGE.isNumber}`);
  }
  if (money % TICKET_PRICE !== 0) {
    throw Error(`[ERROR] ${convertNumberToComma(1000)}${ERROR_MESSAGE.isThousands}`);
  }
};

const countTickets = (money) => {
  validateMoney(money);
  return money / TICKET_PRICE;
};

const generateRandomNumbers = () => MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

const profitRate = (rewards, paid) => ((rewards / paid) * 100).toFixed(1);

module.exports = {
  figureLotteryRank, countTickets, validateMoney, generateRandomNumbers, profitRate,
};
