const LOTTO = require('./Lotto');

const INPUT = {
  PURCHASE: '구입금액을 입력해주세요.',
};

const ERROR = {
  INTEGER: `금액은 정수여야 합니다.`,
  UNIT: `금액은 ${LOTTO.PRICE}원 단위여야 합니다.`,
};

module.exports = { INPUT, ERROR };
