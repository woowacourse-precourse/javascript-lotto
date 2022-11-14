const LOTTO_TICKET = {
  ONE_PRICE: 1000,
};

const LOTTO_NUMBER = {
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  PICK_SIX: 6,
};

const MATCH_NUM = {
  IS_THREE: 3,
  IS_FOUR: 4,
  IS_FIVE: 5,
  IS_FIVE_BONUS: 7,
  IS_SIX: 6,
};

const LOTTO_WINNING_AMOUNT = {
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THIRD_PRIZE: 1500000,
  FORTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
};

const INPUT_MESSAGE = {
  ENTER_MONEY: '구입금액을 입력해 주세요.\n',
  ENTER_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  ENTER_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const RESULT_TXT = {
  TITLE: '\n당첨 통계',
  LINE: '---',
  MATCH_THREE: '3개 일치 (5,000원) - ',
  MATCH_FOUR: '4개 일치 (50,000원) - ',
  MATCH_FIVE: '5개 일치 (1,500,000원) - ',
  MATCH_FIVE_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  MATCH_SIX: '6개 일치 (2,000,000,000원) - ',
};

const ERROR_MESSAGE = {
  INPUT_ONE_THOUSAND_WON_UNIT: '[ERROR] 1000원 단위로 입력해주세요.',
  INPUT_BONUS_NUMBER: '[ERROR] 로또 번호는 1~45까지 하나의 숫자여야 합니다.',
  INPUT_WINNING_NUMBER: '[ERROR] 로또 번호는 1~45까지 숫자여야 합니다.',
  INPUT_NOT_DUPLICATE_WINNING_NUMBER:
    '[ERROR] 당첨 번호와 중복되지 않는 숫자를 입력해주세요',
  INPUT_NOT_DUPLICATE_SIX_NUMBER:
    '[ERROR] 쉼표(,)를 기준으로 중복되지 않은 숫자 6개를 입력해주세요.',
};

module.exports = {
  LOTTO_TICKET,
  LOTTO_NUMBER,
  MATCH_NUM,
  LOTTO_WINNING_AMOUNT,
  INPUT_MESSAGE,
  RESULT_TXT,
  ERROR_MESSAGE,
};
