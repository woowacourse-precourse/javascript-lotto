const { INPUT_MONEY_ERROR } = require('../constants/constants');

const validateInputMoney = (money) => {
  if (!money) {
    throw new Error(INPUT_MONEY_ERROR.NOT_NULL_ALLOWED);
  }
  if (money < 0) {
    throw new Error(INPUT_MONEY_ERROR.NUM_OVER_ZERO_ALLOWED);
  }
  if (money % 1000 !== 0) {
    throw new Error(INPUT_MONEY_ERROR.THOUSAND_UNIT_ALLOWED);
  }
};

const validateLotto = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
  if (new Set(numbers).size !== numbers.length) {
    throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
  }
  if (!numbers.filter((num) => 1 > num || num > 45)) {
    throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  }
};

module.exports = { validateInputMoney, validateLotto };
