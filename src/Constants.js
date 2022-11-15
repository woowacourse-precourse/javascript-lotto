const PRIZE_MATCH = {
  0: 'loseMoney',
  1: 'loseMoney',
  2: 'loseMoney',
  3: 'fifthGrade',
  4: 'forthGrade',
  5: 'thirdGrade',
  6: 'firstGrade',
  FIVEPLUSBONUS: 'secondGrade',
};

const LOTTO_PRIZE = {
  fifthGrade: 5000,
  forthGrade: 50000,
  thirdGrade: 1500000,
  secondGrade: 30000000,
  firstGrade: 2000000000,
  loseMoney: 0,
};

const LOTTO = {
  PRICE: 1000,
};

const LOTTO_RQUEST_MSG = {
  MONEY: '구입금액을 입력해 주세요.\n',
  WIN_NUMBER: '당첨번호를 입력해주세요.\n',
  BONUS_NUMBER: '보너스 숫자를 입력해주세요\n',
};

const LOTTO_RESULT_MSG = {
  PURCHASE_COUNT: count => `${count}개를 구매했습니다.`,
  FIFTH_GRADE: grade => `3개 일치 (5,000원) - ${grade}개`,
  FORTH_GRADE: grade => `4개 일치 (50,000원) - ${grade}개`,
  THIRTH_GRADE: grade => `5개 일치 (1,500,000원) - ${grade}개`,
  SECOND_GRADE: grade => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${grade}개`,
  FIRST_GRADE: grade => `6개 일치 (2,000,000,000원) - ${grade}개`,
  PROFIT_RATE: rate => `총 수익률은 ${rate}%입니다.`,
  WINNING_STATISTICS: '당첨 통계\n---',
};

const LOTTO_ERROR_MSG = {
  IS_WRONG_NUMBER_COUNT: '[ERROR] 로또 번호는 6개여야 합니다.',
  IS_DUPLICATE_NUMBER: '[ERROR] 중복된 숫자가 없어야 합니다.',
  IS_WRONG_MONEY_VALUE: '[ERROR] 구매 금액은 1,000 단위로 입력해주세요',
};

const NUM = {
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  HOW_MANY: 6,
  COUNT_INPUT_FOR_WIN: 6,
};

module.exports = {
  LOTTO_RQUEST_MSG,
  LOTTO_RESULT_MSG,
  LOTTO_ERROR_MSG,
  PRIZE_MATCH,
  NUM,
  LOTTO_PRIZE,
  LOTTO,
};
