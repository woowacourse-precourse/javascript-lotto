const PRINT = {
  ENTER_PURCHASE_AMOUNT_INPUT: '구입금액을 입력해 주세요.\n',
  ENTER_WINNING_NUMS: '\n당첨 번호를 입력해 주세요.\n',
  ENTER_BONUS_NUM: '\n보너스 번호를 입력해 주세요.\n',
  RESULT_FORM: '\n당첨 통계\n---',
  CORRECT_THREE: '3개 일치 (5,000원) - ',
  COREECT_FOUR: '4개 일치 (50,000원) - ',
  CORRECT_FIVE: '5개 일치 (1,500,000원) - ',
  CORRECT_FIVE_AND_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  CORRECT_SIX: '6개 일치 (2,000,000,000원) - ',
};

const ERROR_MESSAGE = {
  NOT_A_NUM: '[ERROR] 로또 번호는 숫자만 입력해야 합니다.\n',
  INVALID_AMOUNT: '[ERROR] 금액은 1,000원 단위로만 입력할 수 있습니다.',
  NOT_SIX_NUM: '[ERROR] 로또 번호는 6개여야 합니다.',
  NOT_IN_RANGE: '[ERROR] 로또 번호는 1~45 범위의 숫자여야 합니다.',
  DUPLICATED_NUM: '[ERROR] 로또 번호는 중복되지 않아야 합니다.',
};

const LOTTO = {
  MIN_NUM: 1,
  MAX_NUM: 45,
  NUM: 6,
  PRICE_PER: 1000,
};

const PROFIT = {
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVE_AND_BONUS: 30000000,
  SIX: 2000000000,
};

const REGEX_NUM = /^[0-9]+$/;

module.exports = {
  PRINT,
  ERROR_MESSAGE,
  LOTTO,
  PROFIT,
  REGEX_NUM,
};
