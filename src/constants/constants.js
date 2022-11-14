// 상수로 관리하는 기준
// 1. 같은 의미의 값이 중복으로 사용될 경우 하나의 상수값으로 관리한다.
// 2. 값의 의미가 분명하게 전달되지 않는 경우 상수값으로 관리하며 이름을 통해 의미를 명확히 한다.
const RESULT = {
  TITLE: '\n당첨 통계\n---',
  SCORE: {
    FIFTH_RANK: (score) => `3개 일치 (5,000원) - ${score}개`,
    FOURTH_RANK: (score) => `4개 일치 (50,000원) - ${score}개`,
    THIRD_RANK: (score) => `5개 일치 (1,500,000원) - ${score}개`,
    SECOND_RANK: (score) =>
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${score}개`,
    FIRST_RANK: (score) => `6개 일치 (2,000,000,000원) - ${score}개`,
  },
  PROFIT: (profit) => `총 수익률은 ${profit}%입니다.`,
};

const WINNING_MONEY = {
  FIFTH_RANK: 5000,
  FOURTH_RANK: 50000,
  THIRD_RANK: 1500000,
  SECOND_RANK: 30000000,
  FIRST_RANK: 2000000000,
};

const ERROR = '[ERROR]';

const INPUT_MONEY_ERROR = {
  NOT_NULL_ALLOWED: `${ERROR} 구입 금액을 숫자로 입력해야 합니다.`,
  NUM_OVER_ZERO_ALLOWED: `${ERROR} 금액은 0보다 커야 합니다.`,
  THOUSAND_UNIT_ALLOWED: `${ERROR} 천 원 단위로 입력해야 합니다.`,
};

const GENERATE_LOTTO_ERROR = {
  NOT_NULL_ALLOWED: `${ERROR} 로또 번호를 입력해야 합니다.`,
  SIX_DIGIT_ALLOWED: `${ERROR} 로또 번호는 6개여야 합니다.`,
  NOT_DUPLICATED_ALLOWED: `${ERROR} 로또 번호는 중복될 수 없습니다.`,
  NUM_IN_RANGE_ALLOWED: `${ERROR} 로또 번호는 1부터 45 사이의 숫자여야 합니다.`,
};

const MIN_LOTTO_NUM = 1;
const MAX_LOTTO_NUM = 45;
const NUM_OF_LOTTO = 6;

module.exports = {
  RESULT,
  WINNING_MONEY,
  INPUT_MONEY_ERROR,
  GENERATE_LOTTO_ERROR,
  MIN_LOTTO_NUM,
  MAX_LOTTO_NUM,
  NUM_OF_LOTTO,
};
