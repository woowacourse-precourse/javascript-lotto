const { TICKET_PRICE } = require('./CONSTANT');

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
    throw Error('[ERROR] 숫자여야 합니다.');
  }
  if (money % TICKET_PRICE !== 0) {
    throw Error(`[ERROR] ${convertNumberToComma(1000)}원 단위로 입력하세요`);
  }
};

const countTickets = (money) => {
  validateMoney(money);
  return money / TICKET_PRICE;
};
module.exports = { figureLotteryRank, countTickets };
