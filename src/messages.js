const {
  LOTTO_LENGTH,
  LOTTO_RANGE,
  LOTTO_PRICE,
  AWARD,
} = require('./constants');

const CONSOLE = {
  REQUEST_PRICE: '구입금액을 입력해 주세요.\n',
  REQUEST_WINNING: '\n당첨 번호를 입력해 주세요.\n',
  REQUEST_BONUS: '\n보너스 번호를 입력해 주세요.\n',
  ENTRY_RESULT: '\n당첨 통계\n---',
};

const ERROR = {
  PRICE: {
    VALID_TYPE: '[ERROR] 금액은 숫자만 입력할 수 있습니다.',
    VALID_UNIT: '[ERROR] 금액은 1,000원 단위로 나누어 떨어져야 합니다.',
  },
  LOTTO: {
    VALID_AMOUNT: `[ERROR] 로또 번호는 ${LOTTO_LENGTH}개여야 합니다.`,
    VALID_UNIQUE: '[ERROR] 로또 번호에는 중복이 존재할 수 없습니다.',
    VALID_TYPE: '[ERROR] 로또 번호는 숫자만 입력해야 합니다.',
    VALID_RANGE: `[ERROR] 로또 번호는 ${LOTTO_RANGE.MIN}부터 ${LOTTO_RANGE.MAX} 사이의 숫자여야 합니다.`,
    VALID_BONUS: '[Error] 중복된 숫자를 보너스 번호로 지정할 수 없습니다.',
  },
};

const getMsg = {
  purchased: (price) => `\n${price / LOTTO_PRICE}개를 구매했습니다.`,
  statistic: (result) =>
    ['3개 일치', '4개 일치', '5개 일치', '5개 일치, 보너스 볼 일치', '6개 일치']
      .map(
        (prefix, i) =>
          `${prefix} (${AWARD[i].toLocaleString()}원) - ${result[i]}개`
      )
      .join('\n'),
  profit: (profit) => `총 수익률은 ${profit}%입니다.`,
};

module.exports = { CONSOLE, ERROR, getMsg };
