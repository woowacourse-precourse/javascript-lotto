const LOTTO_PRICE = 1000;

const GAME_RANGE = {
  RANGE_MIN: 1,
  RANGE_MAX: 45,
  NUM_LENGTH: 6,
};

const BONUS_RANGE = {
  BONUS_MIN: 1,
  BONUS_MAX: 45,
  BONUS_LENGTH: 1,
};

const PRIZES = {
  1: {
    VALUE: 2000000000,
    DISPLAY_NAME: '(2,000,000,000원)',
  },
  2: {
    VALUE: 30000000,
    DISPLAY_NAME: '(30,000,000원)',
  },
  3: {
    VALUE: 1500000,
    DISPLAY_NAME: '(1,500,000원)',
  },
  4: {
    VALUE: 50000,
    DISPLAY_NAME: '(50,000원)',
  },
  5: {
    VALUE: 5000,
    DISPLAY_NAME: '(5,000원)',
  },
};

/**
 * RANK: {
 *  COUNT: count of matching numbers,
 *  BONUS: whether bonus number is included or not,
 * }
 */
const PRIZE_CONFIG = {
  1: {
    COUNT: 6,
    BONUS: false,
  },
  2: {
    COUNT: 5,
    BONUS: true,
  },
  3: {
    COUNT: 5,
    BONUS: false,
  },
  4: {
    COUNT: 4,
    BONUS: false,
  },
  5: {
    COUNT: 3,
    BONUS: false,
  },
};

const USER_INPUT_PHRASE = {
  REQUEST_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  REQUEST_TARGET_NUMBER: '당첨 번호를 입력해 주세요.\n',
  REQUEST_TARGET_DELIMITER: ',',
  REQUEST_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

const STAT_PHRASE = {
  TOTAL_NUM: '개를 구매했습니다.\n',
  STAT: '당첨 통계\n---\n',
  MATCH: '개 일치',
  BONUS: ', 보너스 볼 일치 ',
  DIVDER: ' - ',
  UNIT: '개\n',
  YIELD: '총 수익률은 ',
  PERCENT: '%입니다.\n',
};

const GAME_INPUT_ERRORS = {
  INVALID_INPUT_TYPE: '[ERROR] 로또 구입 금액은 숫자여야 합니다.\n',
  INVALID_BUDGET_RANGE: '[ERROR] 로또 구입 금액은 0보다 커야 합니다.\n',
  INVALID_BUDGET_REMAINDER: '[ERROR] 구입 금액은 1,000으로 나누어떨어져야 합니다.\n',

  INVALID_TARGET_TYPE: '[ERROR] 당첨 번호는 숫자여야 합니다.\n',
  INVALID_TARGET_RANGE: '[ERROR] 당첨 번호는 1 이상 45 이하의 숫자여야 합니다.\n',
  INVALID_TARGET_DUPLICATED: '[ERROR] 당첨 번호는 중복되지 않아야 합니다.\n',
  INVALID_TARGET_LENGTH: '[ERROR] 당첨 번호는 6개여야 합니다.\n',

  INVALID_BONUS_TYPE: '[ERROR] 보너스 번호는 숫자여야 합니다.\n',
  INVALID_BONUS_RANGE: '[ERROR] 보너스 번호는 1 이상 45 이하의 숫자여야 합니다.\n',

  BONUS_IN_TARGET: '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.\n',
};

module.exports = {
  GAME_RANGE,
  BONUS_RANGE,
  PRIZES,
  PRIZE_CONFIG,
  LOTTO_PRICE,
  USER_INPUT_PHRASE,
  STAT_PHRASE,
  GAME_INPUT_ERRORS,
};
