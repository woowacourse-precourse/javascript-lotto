const MESSAGE = {
  INPUT_CASH: '구입금액을 입력해 주세요.',
  BOUGHT_LOTTO_INFO(amount) {
    return `${amount}개를 구매했습니다.`;
  },
  INPUT_WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  WINNING_RESULT: '당첨 통계',
  FIFTH_PLACE_RESULT(amount) {
    return `3개 일치 (5,000원) - ${amount}개`;
  },
  FOURTH_PLACE_RESULT(amount) {
    return `4개 일치 (50,000원) - ${amount}개`;
  },
  THIRD_PLACE_RESULT(amount) {
    return `5개 일치 (1,500,000원) - ${amount}개`;
  },
  SECOND_PLACE_RESULT(amount) {
    return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${amount}개`;
  },
  FIRST_PLACE_RESULT(amount) {
    return `6개 일치 (2,000,000,000원) - ${amount}개`;
  },
  TOTAL_YIELD_RESULT(yieldResult) {
    return `총 수익률은 ${yieldResult}%입니다.`;
  },
};

const WINNING_PRIZE = {
  FIFTH: 5000,
  FOURTH: 50000,
  THIRD: 1500000,
  SECOND: 30000000,
  FIRST: 2000000000,
};

const RANK = {
  FIFTH: 5,
  FOURTH: 4,
  THIRD: 3,
  SECOND: 2,
  FIRST: 1,
};

const LOTTO_NUMBER = {
  START: 1,
  END: 45,
  LENGTH: 6,
};

const MONEY_UNIT = 1000;

const YIELD = {
  ROUND: 1,
  PERCENT: 100,
};

const ERROR_MESSAGE = {
  NOT_NUMBER_ERROR: '[ERROR] 숫자를 입력해주세요.',
  BONUS_NUMBER_NOT_DIFFERENT_NUMBER_ERROR:
    '[ERROR] 보너스 번호는 당첨번호와 중복되지 않는 수를 입력해주세요.',
  NUM_IN_RANGE_ERROR: '[ERROR] 로또 번호는 1부터 45 사이의 자연수들로 이루어져야 합니다.',
  NOT_DIVIDE_BY_THOUSAND_ERROR: '[ERROR] 1,000으로 나누어떨어지는 금액을 입력해주세요.',
  WINNING_NUMBER_NOT_DIFFERENT_NUMBER_ERROR:
    '[ERROR] 로또 번호는 서로 다른 숫자로 이루어져야 합니다.',
  WINNING_NUMBER_LENGTH_ERROR: '[ERROR] 로또 번호는 6개여야 합니다.',
};

const constants = Object.freeze({
  MESSAGE,
  WINNING_PRIZE,
  ERROR_MESSAGE,
  LOTTO_NUMBER,
  MONEY_UNIT,
  YIELD,
  RANK,
});

module.exports = constants;
