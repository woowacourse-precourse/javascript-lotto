const MESSAGE = Object.freeze({
  ENTER_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  ISSUED_QUANTITY: '개를 구매했습니다.',
  ENTER_WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  ENTER_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  STATISTICS: '당첨 통계\n---',
  HISTORY_FIFTH_PLACE: '3개 일치 (5,000원) - ',
  HISTORY_FOURTH_PLACE: '4개 일치 (50,000원) - ',
  HISTORY_THIRD_PLACE: '5개 일치 (1,500,000원) - ',
  HISTORY_SECOND_PLACE: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  HISTORY_FIRST_PLACE: '6개 일치 (2,000,000,000원) - ',
  HISTORY_NUMBER: '개',
  RETURN_TOTAL: '총 수익률은 ',
  RETURN_PERCENT: '%입니다.',
});

const RANDOM_NUMBER = Object.freeze({
  MIN: 1,
  MAX: 45,
  COUNT: 6,
});

const REGEX = Object.freeze({
  PURCHASE_AMOUNT_REGEX: /^[1-9]{1}[0-9]*0{3}$/,
  WINNING_NUMBER_REGEX: /^([1-45],){5}[1-45]{1}$/,
  BONUS_NUMBER_REGEX: /^[1-45]{1}$/,
});

const ERROR = Object.freeze({
  ENTER_VALID_PURCHASE_AMOUNT: '[ERROR] 구입 금액은 1,000원 단위 입니다.',
  ENTER_VALID_WINNING_NUMBER:
    '[ERROR] 로또 번호는 1부터 45 사이의 쉼표로 구분된 숫자 6개여야 합니다.',
  ENTER_VALID_BONUS_NUMBER:
    '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  ENTER_WITHOUT_REPETITION: '[ERROR] 중복되지 않는 숫자를 입력해 주세요.',
});

module.exports = { MESSAGE, RANDOM_NUMBER, REGEX, ERROR };
