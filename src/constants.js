const USER_MONEY_INPUT_REQUEST = '구입금액을 입력해 주세요.';
const ERROR_USER_MONEY_INPUT = '[ERROR] 구입금액이 올바르지 않습니다.';
const LOTTO_QUANTITY_OUTPUT = '개를 구매했습니다.';
const WINNING_LOTTO_REQUEST = '\n당첨 번호를 입력해 주세요.';
const BONUS_NUMBER_REQUEST = '\n보너스 번호를 입력해 주세요.';
const ERROR_SIX_NUMBER = '[ERROR] 로또 번호는 6개여야 합니다.';
const ERROR_OVERLAP_NUMBER = '[ERROR] 로또 번호는 중복될 수 없습니다.';
const ERROR_NUMBER_RANGE = '[ERROR] 로또 번호는 1~45번 사이여야 합니다.';
const ERROR_NOT_NUMBER = '[ERROR] 로또 번호는 숫자여야 합니다.';
const PRINT_STRING = [
  '3개 일치 (5,000원) - ',
  '4개 일치 (50,000원) - ',
  '5개 일치 (1,500,000원) - ',
  '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  '6개 일치 (2,000,000,000원) - ',
];
const PRIZE_MONEY = [5000, 50000, 1500000, 30000000, 2000000000];
const ERROR_BONUS_NUMBER = '[ERROR] 유효한 번호가 아닙니다.';
const PRIZE_RESULT_PRINT = '\n당첨 통계\n---';
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;
const MONEY_UNIT = 1000;
const LOTTO_COUNT = 6;

module.exports = {
  USER_MONEY_INPUT_REQUEST,
  ERROR_USER_MONEY_INPUT,
  LOTTO_QUANTITY_OUTPUT,
  WINNING_LOTTO_REQUEST,
  BONUS_NUMBER_REQUEST,
  PRINT_STRING,
  PRIZE_MONEY,
  ERROR_BONUS_NUMBER,
  PRIZE_RESULT_PRINT,
  ERROR_SIX_NUMBER,
  ERROR_OVERLAP_NUMBER,
  ERROR_NUMBER_RANGE,
  ERROR_NOT_NUMBER,
  MIN_NUMBER,
  MAX_NUMBER,
  MONEY_UNIT,
  LOTTO_COUNT,
};
