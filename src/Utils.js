const { LOTTO_PRICE, ERROR_MESSAGE } = require('./Constants.js');

const validateMoney = money => {
  if (Number.isNaN(+money)) {
    throw new Error(ERROR_MESSAGE.INVALID_INPUT_NOT_NUM);
  }
  if (Number(money) % LOTTO_PRICE !== 0) {
    throw new Error(ERROR_MESSAGE.INVALID_MONEY_UNIT);
  }
};

const validateBonusNumber = (number, winningNumbers) => {
  if (Number.isNaN(+number)) {
    throw new Error(ERROR_MESSAGE.INVALID_INPUT_NOT_NUM);
  }
  if (+number < 1 || +number > 45) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_RANGE);
  }
  if (winningNumbers.includes(+number)) {
    throw new Error(ERROR_MESSAGE.BONUS_NUMBER_DUPLICATE);
  }
};

const getLottoRanking = (lotto, winningNumbers, bonusNumber) => {
  let cnt = 0;
  winningNumbers.forEach(num => {
    if (lotto.includes(num)) {
      cnt += 1;
    }
  });

  if (cnt === 6) return 1;
  if (cnt === 5 && lotto.includes(bonusNumber)) return 2;
  if (cnt === 5) return 3;
  if (cnt === 4) return 4;
  if (cnt === 3) return 5;

  return 0;
};

module.exports = { validateMoney, validateBonusNumber, getLottoRanking };
