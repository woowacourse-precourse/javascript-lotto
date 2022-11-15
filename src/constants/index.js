const LOTTO = Object.freeze({
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LENGTH: 6,
  NUM_OF_PRIZE: 5,
});

const REGEX = Object.freeze({
  number: /^\d+$/,
  winningNumbers: /^(\d+,)+\d+$/,
});

const RANK = Object.freeze({
  ONE: 0,
  TWO: 1,
  THREE: 2,
  FOUR: 3,
  FIVE: 4,
  FAIL: -1,
});

const PRIZE_MONEY = [2000000000, 30000000, 1500000, 50000, 5000];

const MESSAGE = Object.freeze({
  ASK_BUDGET: '구입금액을 입력해 주세요.\n',
  ASK_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  ASK_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  STATISTICS_NOTIFICATION: '\n당첨 통계',
  DIVISION_LINE: '---',
});

const ERROR_MESSAGE = Object.freeze({
  ERROR_FORM: '[ERROR] ',
  HAS_BLANK: '입력에 공백을 포함시킬 수 없습니다.',
  START_WITH_ZERO: '정수의 앞에 0이 올 수 없습니다.',
  OUT_OF_RANGE: '1에서 45까지의 숫자를 입력해야 합니다.',
  INT_FORM: '음이아닌 정수를 입력해야 합니다.',
  HAS_MOD: '1000의 배수를 입력해야 합니다.',
  WINNING_NUM_FORM: '숫자를 ,로 구분해 입력해야 합니다.',
  LENGTH: '로또 번호는 6개여야 합니다.',
  DUPLICATION: '중복된 숫자를 입력할 수 없습니다.',
  WINNING_HAS: '이미 당첨 번호에 포함된 번호를 입력할 수 없습니다.',
});

const RENDER_MESSAGE = Object.freeze({
  purchaseNotification: (count) => `\n${count}개를 구매했습니다.`,
  issuedLotto: (numbers) => `[${numbers.join(', ')}]`,
  matchThree: (count) => `3개 일치 (5,000원) - ${count}개`,
  matchFour: (count) => `4개 일치 (50,000원) - ${count}개`,
  matchFive: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  matchFiveAndBonus: (count) =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  matchSix: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  rateOfReturn: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.`,
});

const INPUT = {
  CAN_NOT_INCLUDES: ' ',
  CAN_NOT_STARTS_WITH: '0',
};

const DELIMITER = ',';

const RATIO = 100;

const PLACES_OF_DECIMALS = 1;

module.exports = {
  LOTTO,
  REGEX,
  RANK,
  PRIZE_MONEY,
  MESSAGE,
  ERROR_MESSAGE,
  RENDER_MESSAGE,
  INPUT,
  DELIMITER,
  RATIO,
  PLACES_OF_DECIMALS,
};
