const LOTTO = {
  MIN: 1,
  MAX: 45,
  NUMBER_COUNT: 6,
  PRICE: 1000,
};

const GRADE = {
  FIRST: {
    NAME: 'first',
    DUPLICATE_COUNT: 6,
    EXTRA_TEXT: '',
    PRIZE_MONEY: 2000000000,
  },
  SECOND: {
    NAME: 'second',
    DUPLICATE_COUNT: 5,
    EXTRA_TEXT: ', 보너스 볼 일치',
    PRIZE_MONEY: 30000000,
  },
  THIRD: {
    NAME: 'third',
    DUPLICATE_COUNT: 5,
    EXTRA_TEXT: '',
    PRIZE_MONEY: 1500000,
  },
  FOURTH: {
    NAME: 'fourth',
    DUPLICATE_COUNT: 4,
    EXTRA_TEXT: '',
    PRIZE_MONEY: 50000,
  },
  FIFTH: {
    NAME: 'fifth',
    DUPLICATE_COUNT: 3,
    EXTRA_TEXT: '',
    PRIZE_MONEY: 5000,
  },
};

const MESSAGE = {
  INPUT_PURCHASE_MONEY: '구입금액을 입력해 주세요.\n',
  PRINT_LOTTOS: '\n%s개를 구매했습니다.',
  INPUT_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  PRINT_RESULT_TITLE: '\n당첨 통계\n---',
  PRINT_WINNING_RESULT: '%s개 일치%s (%s원) - %s개',
  PRINT_RETURN_RATE: '총 수익률은 %s%입니다.'
};

const FORMAT = {
  RESULT_ROUND: 1,
  LOCALE_MONEY: 'ko-KR',
  LOTTO_PRINT: {
    FIRST: '[',
    SEPARATOR: ', ',
    LAST: ']',
  },
};

const ERROR = {
  NOT_NUMBER: "[ERROR] 로또 번호는 숫자만 입력 가능합니다.",
  NOT_UNIT_OF_LOTTO_PRICE: `[ERROR] 구입 금액은 ${LOTTO.PRICE}원 단위로만 입력 가능합니다.`,
  NOT_WINNING_NUMBER_INPUT_FORMAT: "[ERROR] 숫자를 쉼표로 구분하여 입력해주세요.",
  NOT_RANGE_OF_LOTTO_NUMBER: `[ERROR] 로또 번호는 ${LOTTO.MIN}부터 ${LOTTO.MAX} 사이의 숫자여야 합니다.`,
  EXIST_IN_WINNING_NUMBER: "[ERROR] 보너스 번호는 당첨 번호에 존재하지 않는 값이어야 합니다.",
  NOT_VALID_LOTTO_NUMBER_COUNT: `[ERROR] 로또 번호는 ${LOTTO.NUMBER_COUNT}개여야 합니다.`,
  DUPLICATE_NUMBER: "[ERROR] 로또 번호에 중복된 값이 포함되어있습니다.",
};

module.exports = { LOTTO, GRADE, MESSAGE, FORMAT, ERROR };