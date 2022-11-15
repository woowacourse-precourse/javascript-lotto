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

const LOTTO = {
  PRICE: 1000,
};

const LOTTO_MSG = {
  RQEUEST_MONEY: '구입금액을 입력해 주세요.\n',
  RQEUEST_WIN_NUMBER: '당첨번호를 입력해주세요.\n',
  RQEUEST_BONUS_NUMBER: '보너스 숫자를 입력해주세요\n',
  INPUT_NUMBER_COUNT_ERROR: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBER_ERROR: '[ERROR] 중복된 숫자가 없어야 합니다.',
  PURCHASE_COUNT: count => `${count}개를 구매했습니다.`,
  FIFTH_GRADE: grade => `3개 일치 (5,000원) - ${grade}개`,
  FORTH_GRADE: grade => `4개 일치 (50,000원) - ${grade}개`,
  THIRTH_GRADE: grade => `5개 일치 (1,500,000원) - ${grade}개`,
  SECOND_GRADE: grade => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${grade}개`,
  FIRST_GRADE: grade => `6개 일치 (2,000,000,000원) - ${grade}개`,
  PROFIT_RATE: rate => `총 수익률은 ${rate}%입니다.`,
};

const NUM = {
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  HOW_MANY: 6,
  DEMAND_FOR_LOTTO_INPUT_COUNT: 6,
};

const LOTTO_PRIZE = {
  fifthGrade: 5000,
  forthGrade: 50000,
  thirdGrade: 1500000,
  secondGrade: 30000000,
  firstGrade: 2000000000,
  loseMoney: 0,
};

module.exports = {
  PRIZE_MATCH,
  LOTTO_MSG,
  NUM,
  LOTTO_PRIZE,
  LOTTO,
};
