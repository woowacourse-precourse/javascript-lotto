const VALID_LOTTO = {
  NUMBER_MAX: 45,
  NUMBER_MIN: 1,
  NUMBER_COUNT: 6,
};

const ERROR_MESSAGES = {
  LOTTO_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_REDUPLICATION: '[ERROR] 로또 번호는 중복되면 안됩니다.',
  LOTTO_OUT_OF_RANGE: '[ERROR] 로또 번호는 1~45사이의 숫자여야 합니다.',
};

const INPUT_MESSAGE = {
  COST: '구입금액을 입력해 주세요.',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const OUTPUT_MESSAGE = {
  LOTTO_QUANTITY: '개를 구매했습니다.',
  WINNING_NOTICE: `당첨 통계\n---`,
  WINNING_STATISTICS: [
    '',
    '3개 일치 (5,000원) -',
    '4개 일치 (50,000원) -',
    '5개 일치 (1,500,000원) -',
    '5개 일치, 보너스 볼 일치 (30,000,000원) -',
    '6개 일치 (2,000,000,000원) -',
  ],
  COUNT_UNIT: '개',
  WINNING_RATE_OF_RESULT_NOTICE_START: `총 수익률은`,
  WINNING_RATE_OF_RESULT_NOTICE_END: '%입니다.',
};

const LOTTO_RANK_MONEY = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

module.exports = {
  VALID_LOTTO,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  LOTTO_RANK_MONEY,
  ERROR_MESSAGES,
};
