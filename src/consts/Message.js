const LOTTO = require('./Lotto');

const INPUT = {
  PURCHASE: '구입금액을 입력해주세요.',
};

const ERROR = {
  PURCHASE: {
    INTEGER: `금액은 정수여야 합니다.`,
    UNIT: `금액은 ${LOTTO.PRICE}원 단위여야 합니다.`,
  },
  LOTTO_NUMBER: {
    DIGITS: `로또 번호는 ${LOTTO.NUMBER_OF_DIGITS}개여야 합니다.`,
    RANGE: `로또 번호는 ${LOTTO.START_NUMBER}과 ${LOTTO.END_NUMBER} 사이의 숫자여야 합니다.`,
    UNIQUE: '로또 번호는 중복되지 않아야 합니다.',
  },
};

module.exports = { INPUT, ERROR };
