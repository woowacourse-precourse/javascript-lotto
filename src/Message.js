const LOTTO = {
  PRICE: 1000,
  MINNUM: 1,
  MAXNUM: 45,
  COUNT: 6,
};

const PRIZE = {
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 30000000,
  7: 2000000000,
};

const TEXT = {
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  LOTTO_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  BUY_COUNT: (count) => `${count}개를 구매했습니다.`,
  RESULT: '당첨 통계\n---',
};

const RESULT_TEXT = [
  '3개 일치 (5,000원) -',
  '4개 일치 (50,000원) -',
  '5개 일치 (1,500,000원) -',
  '5개 일치, 보너스 볼 일치 (30,000,000원) -',
  '6개 일치 (2,000,000,000원) -',
];

const ERROR = {
  INPUT_NUMBER_ERROR: '[ERROR] 구입금액은 숫자로만 이루어저야 합니다.',
  INPUT_UNIT_ERROR: '[ERROR] 구입금액은 1,000원 단위어야 합니다.',

  NUMBER_ERROR: '[ERROR] 로또 번호는 숫자로만 이루어저야 합니다.',
  RANGE_ERROR: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여만 합니다.',
  DUPLICATION_ERROR: '[ERROR] 로또 번호는 중복되지 않은 숫자여야 합니다.',
  COUNT_ERROR: '[ERROR] 로또 번호는 6개여야만 합니다.',
};

module.exports = { LOTTO, TEXT, ERROR, RESULT_TEXT, PRIZE };
