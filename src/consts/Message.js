const { LOTTO } = require('./LottoSystem');

const INPUT = {
  PURCHASE: '구입금액을 입력해 주세요.',
  WINNING: '당첨 번호를 입력해 주세요.',
  BONUS: '보너스 번호를 입력해 주세요.',
};

const NOTICE = {
  PURCHASE_SUCCESS: (numberOfPurchases) =>
    `${numberOfPurchases}개를 구매했습니다.`,
};

const ERROR = {
  PURCHASE: {
    INTEGER: `금액은 정수여야 합니다.`,
    UNIT: `금액은 ${LOTTO.PRICE}원 단위여야 합니다.`,
  },
  LOTTO_NUMBER: {
    DIGITS: `로또 번호는 ${LOTTO.NUMBER_OF_DIGITS}개여야 합니다.`,
    INTEGER: `로또 번호는 정수여야 합니다.`,
    RANGE: `로또 번호는 ${LOTTO.START_NUMBER}과 ${LOTTO.END_NUMBER} 사이의 숫자여야 합니다.`,
    UNIQUE: '로또 번호는 중복되지 않아야 합니다.',
  },
  WINNING: {
    FORM: '당첨 숫자 입력이 형식에 맞지 않습니다.',
  },
  BONUS: {
    INTEGER: '보너스 숫자는 정수여야 합니다.',
    UNIQUE: '보너스 숫자는 로또 번호와 중복되지 않아야 합니다.',
    RANGE: `보너스 숫자는 ${LOTTO.START_NUMBER}과 ${LOTTO.END_NUMBER} 사이의 숫자여야 합니다.`,
  },
};

module.exports = { INPUT, NOTICE, ERROR };
