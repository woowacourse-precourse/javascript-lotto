const PRINT = {
  ENTER_PURCHASE_AMOUNT_INPUT: '구입금액을 입력해 주세요.\n',
  ENTER_WINNING_NUMS: '당첨 번호를 입력해 주세요.\n',
  ENTER_BONUS_NUM: '보너스 번호를 입력해 주세요.\n'
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
};

const PROFIT = {
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVE_AND_BONUS: 30000000,
  SIX: 2000000000,
};

const REGEX_NUM = /^[0-9]+$/;

const PRICE_PER_LOTTO = 1000;

module.exports = {
  PRINT,
  ERROR_MESSAGE,
  LOTTO,
  PROFIT,
  REGEX_NUM,
  PRICE_PER_LOTTO,
};
