const INPUT_QUERY = {
  LOTTO_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n'
};

const PREFIX = '[ERROR] ';

const ERROR = {
  NOT_NUMBER: PREFIX + '숫자를 입력해주세요.',
  UNDER_THOUSAND: PREFIX + '입력된 값이 1000원 이하입니다.',
  NOT_THOUSAND_UNIT: PREFIX + '1000원 단위로 입력해주세요.',
  NOT_SIX_DIGITS: PREFIX + '6자리를 입력하지 않았습니다.',
  DUPLICATE: PREFIX + '중복된 숫자가 있습니다.',
  OUT_OF_RANGE: PREFIX + '당첨번호는 1부터 45까지의 숫자여야 합니다.'
};

const OUTPUT = {
  PURCHASED_AMONUT: (number) => `${number}개를 구매했습니다.`,
  THREE: (fifth) => `3개 일치 (5,000원) - ${fifth}개`,
  FOUR: (fourth) => `4개 일치 (50,000원) - ${fourth}개`,
  FIVE: (third) => `5개 일치 (1,500,000원) - ${third}개`,
  FIVEBONUS: (second) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개`,
  SIX: (first) => `6개 일치 (2,000,000,000원) - ${first}개`,
  PROFIT: (profit) => `총 수익률은 ${profit}%입니다.`
};

const PRIZE_MONEY = [2000000000, 30000000, 1500000, 50000, 5000];

const prizeCount = {
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0
};

const NUMBER = {
  MIN_VALUE: 1,
  MAX_VALUE: 45,
  COUNT: 6,
  THOUSAND_WON: 1000,
  SIX_MATCHED: 6,
  FIVE_MATCHED: 5,
  FOUR_MATCHED: 4,
  THREE_MATCHED: 3,
  INCREASED_COUNT: 1,
  ONE_HUNDRED: 100,
  INITIAL_VALUE: 0,
}

module.exports = { INPUT_QUERY, ERROR, prizeCount, PRIZE_MONEY, OUTPUT, NUMBER };
