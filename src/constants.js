const PHRASE = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  LOTTO_COUNT: '개를 구매했습니다.',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
};

const ERROR = {
  PURCHASE_AMOUNT_UNIT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  PURCHASE_AMOUNT_TYPE: '[ERROR] 구입 금액은 숫자여야 합니다.',
  PURCHASE_AMOUNT_POSITIVE: '[ERROR] 구입 금액은 양수여야 합니다',

  LOTTO_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_NUMBER_RANGE: '[ERROR] 로또 번호는 1이상 45이하여야 합니다.',
  LOTTO_NUMBER_OVERLAP: '[ERROR] 로또 번호는 서로 중복되지 않는 숫자여야 합니다.',

  WINNING_NUMBER: '[ERROR] 당첨 번호는 숫자 6개를 쉼표(,)로 구분하여야 합니다.',

  BONUS_NUMBER_COUNT: '[ERROR] 보너스 번호는 숫자 1개여야 합니다.',
  BONUS_NUMBER_OVERLAP:
    '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않는 숫자여야 합니다.',
};

const LOTTO = {
  NUMBERS_COUNT: 6,
  MAX_NUMBER: 45,
  MIN_NUMBER: 1,
  PRICE: 1000,
};

const RANKING = {
  FIFTH: '5등',
  FOURTH: '4등',
  THIRD: '3등',
  SECOND: '2등',
  FIRST: '1등',
};

const PRIZE_MONEY = {
  FIFTH: 5000,
  FOURTH: 50000,
  THIRD: 1500000,
  SECOND: 30000000,
  FIRST: 2000000000,
};

const RATE_OF_RETURN = '수익률';

const RESULT = {
  FIFTH: (count) => `3개 일치 (5,000원) - ${count}개`,
  FOURTH: (count) => `4개 일치 (50,000원) - ${count}개`,
  THIRD: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  SECOND: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  FIRST: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  RATE_OF_RETURN: (rate) => `총 수익률은 ${rate}%입니다.`,
};

module.exports = { PHRASE, ERROR, LOTTO, RANKING, PRIZE_MONEY, RATE_OF_RETURN, RESULT };
