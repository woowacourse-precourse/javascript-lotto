const LOTTO = {
  TICKET_PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBER_COUNT: 6,
};

const CASHER = {
  ASK_MONEY: '구입금액을 입력해 주세요.\n',
  NOTICE_PURCHASE_QUANTITY: '개를 구매했습니다.',
  ERROR_MESSAGE: {
    MONEY_IS_NOT_ENOUGH: '[ERROR] 구입금액이 부족합니다.',
    MONEY_IS_NOT_NUMBER: '[ERROR] 구입금액은 숫자여야 합니다.',
    MONEY_HAS_CHAGE_LEFT: '[ERROR] 구입금액에 남은 잔돈이 있습니다.',
  },
};

const LOTTO_PICKER = {
  ASK_WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  ASK_BONUS_NUMBER: '보너스 볼을 입력해 주세요.\n',
  PICKER_ERROR: {
    WINNING_NUMBERS_LENGTH: '[ERROR] 당첨 번호는 6개여야 합니다.',
    WINNIG_NUMBERS_IS_NOT_NUMBER: '[ERROR] 당첨 번호는 숫자여야 합니다.',
    WINNING_NUMBERS_IS_NOT_IN_RANGE: '[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.',
    BONUS_NUMBER_IS_DUPLICATED: '[ERROR] 보너스 볼은 당첨 번호와 중복될 수 없습니다.',
    BONUS_NUMBER_IS_NOT_NUMBER: '[ERROR] 보너스 볼은 숫자여야 합니다.',
    BONUS_NUMBER_IS_NOT_IN_RANGE: '[ERROR] 보너스 볼은 1~45 사이의 숫자여야 합니다.',
  },
};

const LOTTO_RESULT = {
  // matchedCount : rank
  RANK: {
    6: 1,
    5: 3,
    4: 4,
    3: 5,
    2: 6,
    1: 6,
    0: 6,
  },
  // rank : prize
  RANK_PRIZE: {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
    6: 0,
  },
  NOTICE_RESULT_TITLE: '당첨 통계\n---------',
  // rank : message
};

const RESULT_MESSAGES = {
  5: `3개 일치 (${LOTTO_RESULT.RANK_PRIZE[5].toLocaleString()}원)`,
  4: `4개 일치 (${LOTTO_RESULT.RANK_PRIZE[4].toLocaleString()}원)`,
  3: `5개 일치 (${LOTTO_RESULT.RANK_PRIZE[3].toLocaleString()}원)`,
  2: `5개 일치, 보너스 볼 일치 (${LOTTO_RESULT.RANK_PRIZE[2].toLocaleString()}원)`,
  1: `6개 일치 (${LOTTO_RESULT.RANK_PRIZE[1].toLocaleString()}원)`,
};

module.exports = { LOTTO, CASHER, LOTTO_PICKER, LOTTO_RESULT, RESULT_MESSAGES };
