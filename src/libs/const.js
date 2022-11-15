const ERROR_MESSAGE = {
  MIN_MONEY: '[ERROR] 구입금액: 1000 이상 입력할 수 있습니다.',
  UNIT_MONEY: '[ERROR] 구입금액: 1000 단위로 로또를 구입해야 합니다.',
  INCLUDE_WINNING_NUMBER:
    '[ERROR] 보너스 번호: 이미 당첨 번호에 포함되어 있습니다.',
};

const MESSAGE = {
  REQUEST_MONEY: '구입금액을 입력해 주세요.\n',
  REQUEST_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  REQUEST_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_STATS: '\n당첨 통계\n---',
};

const MONEY = {
  UNIT: 1000,
  MIN: 1000,
};

const LOTTO = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  NUMBERS_COUNT: 6,
};

const WINNING_DETAIL = {
  FIRST: '6개 일치 (2,000,000,000원)',
  SECOND: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  THIRD: '5개 일치 (1,500,000원)',
  FOURTH: '4개 일치 (50,000원)',
  FIFTH: '3개 일치 (5,000원)',
};

const PRIZE = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

const PLACE = {
  FIRST: 1,
  SECOND: 2,
  LAST: 5,
};

const PURCHASE_MONEY = '구입금액';
const LOTTO_NUMBER = '로또 번호';
const WINNING_NUMBER = '당첨 번호';
const BONUS_NUMBER = '보너스 번호';

module.exports = {
  ERROR_MESSAGE,
  MESSAGE,
  MONEY,
  LOTTO,
  WINNING_DETAIL,
  PRIZE,
  PLACE,
  PURCHASE_MONEY,
  LOTTO_NUMBER,
  WINNING_NUMBER,
  BONUS_NUMBER,
};
