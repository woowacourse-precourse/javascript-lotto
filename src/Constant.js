const LOTTO = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LENGTH: 6,
  PRICE: 1000,
  JACKPOT_MONEY_LIST: [5000, 50000, 1500000, 30000000, 2000000000],
};

const PROCESS_MESSAGE = {
  BUY_START: '구입금액을 입력해 주세요.\n',
  BUY_LIST: '개를 구매했습니다.',
  JACKPOT_START: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_START: '\n보너스 번호를 입력해 주세요.\n',
};

const RESULT_MESSAGE = {
  TOP_TEXT: '당첨 통계',
  MIDDLE_TEXT: '---',
  WON_LOTTE_FIVE: '3개 일치 (5,000원) - ',
  WON_LOTTE_FOUR: '4개 일치 (50,000원) - ',
  WON_LOTTE_THREE: '5개 일치 (1,500,000원) - ',
  WON_LOTTE_TWO: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  WON_LOTTE_ONE: '6개 일치 (2,000,000,000원) - ',
  END: '개',
};

const LOTTO_RANK = {
  FIVE: 0,
  FOUR: 1,
  THREE: 2,
  TWO: 3,
  ONE: 4,
};

const RATE_OF_RETURN = {
  HEADER_TEXT: '총 수익률은 ',
  FOOTER_TEXT: '%입니다.',
  MULTIPLY_VALUE: 100,
};

const NUMBER = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
};

const REGEXP = {
  PRICE_LIMIT: /^[1-9][0-9]+$/,
  LOTTO_INPUT_LIMIT: /^[1-9]+$/,
};

const ERROR = {
  LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_OVERLAP: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
  LOTTO_SCPOE: '[ERROR] 로또 번호는 1~45까지의 숫자여야 합니다.',
  LOTTO_PRICE: '[ERROR] 1000원 단위의 숫자로 입력해 주세요.',
  JACKPOT_INPUT_TYPE: '[ERROR] 당첨 번호는 쉼표를 기준으로 숫자로만 입력해야합니다.',
  BONUS_ONLY: '[ERROR] 보너스 번호는 하나의 숫자로 입력해야 합니다.',
  BONUS_IS_JACKPOT: '[ERROR] 보너스 번호는 당첨번호와 중복될 수 없습니다.',
};

module.exports = {
  LOTTO,
  PROCESS_MESSAGE,
  RESULT_MESSAGE,
  LOTTO_RANK,
  RATE_OF_RETURN,
  NUMBER,
  REGEXP,
  ERROR,
};
