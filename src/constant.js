const LOTTO_TICKET = {
  ONE_PRICE: 1000,
};

const LOTTO_NUMBER_RANGE = {
  MINIMUM_NUMBER: 1,
  MAXIMUM_NUMBER: 45,
  PICK_SIX_NUMBER: 6,
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

module.exports = {
  LOTTO_TICKET,
  LOTTO_NUMBER_RANGE,
  MATCH_NUM,
  LOTTO_WINNING_AMOUNT,
  INPUT_MESSAGE,
  RESULT_TXT,
};
