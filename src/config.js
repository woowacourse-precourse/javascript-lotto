const LOTTO_PRICE = 1000;

const GAME_RANGE = {
  RANGE_MIN: 1,
  RANGE_MAX: 45,
  NUM_LENGTH: 6,
};

const PRIZES = {
  1: {
    COUNT: 6,
    BONUS: false,
    VALUE: 2000000000,
  },
  2: {
    COUNT: 5,
    BONUS: true,
    VALUE: 30000000,
  },
  3: {
    COUNT: 5,
    BONUS: false,
    VALUE: 1500000,
  },
  4: {
    COUNT: 4,
    BONUS: false,
    VALUE: 50000,
  },
  5: {
    COUNT: 3,
    BONUS: false,
    VALUE: 5000,
  },
};

const USER_INPUT_PHRASE = {
  REQUEST_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  REQUEST_TARGET_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  DELIMITER: ',',
  REQUEST_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const PURCHASE_PHRASE = (count) => `
${count}개를 구매했습니다.
`;

const STAT_PHRASE = (match) => `
당첨 통계
---
3개 일치 (5,000원) - ${match['5'] || 0}개
4개 일치 (50,000원) - ${match['4'] || 0}개
5개 일치 (1,500,000원) - ${match['3'] || 0}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${match[2] || 0}개
6개 일치 (2,000,000,000원) - ${match['1'] || 0}개`;

const PROFIT_PHRASE = (profitRate) => `
총 수익률은 ${profitRate}%입니다.`;

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
  PRIZES,
  LOTTO_PRICE,
  USER_INPUT_PHRASE,
  PROFIT_PHRASE,
  STAT_PHRASE,
  PURCHASE_PHRASE,
  GAME_INPUT_ERRORS,
};
