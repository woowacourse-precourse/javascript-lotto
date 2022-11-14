const MESSAGE = {
  ENTER_USER_MONEY: '구입금액을 입력해 주세요.\n',
  PRINT_TICKET_COUNT: '개를 구매했습니다.',
  ENTER_USER_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  ENTER_USER_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  PRINT_RESULT: '\n당첨 통계\n---\n',
  COUNT_UNIT: '개\n',
};

const TICKET = {
  PRICE: 1000,
};

const PRIZE = {
  THREE: 'three',
  FOUR: 'four',
  FIVE: 'five',
  FIVE_BONUS: 'fiveBonus',
  SIX: 'six',
};

const PROFIT = {
  THREE: 5,
  FOUR: 50,
  FIVE: 1500,
  FIVE_BONUS: 30000,
  SIX: 2000000,
};

const ERROR = {
  NOT_THOUSANDS: '[ERROR] 1000원 단위의 금액을 입력해주세요.',
  LESS_MONEY: '[ERROR] 1000원보다 큰 금액을 입력해주세요.',
};

module.exports = {
  MESSAGE,
  PROFIT,
  PRIZE,
  TICKET,
  ERROR,
};
