const LOTTO_PRICE = 1000;

const MESSAGE = Object.freeze({
  INPUT_MONEY: "구입금액을 입력해 주세요.",
  COUNT_LOTTO: "개를 구매했습니다.",
  INPUT_NUMBER: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  MATCH_TITLE: "당첨 통계",
  MATCH_DIVIDER: "---",
  MATCH_THREE: "3개 일치 (",
  MATCH_FOUR: "4개 일치 (",
  MATCH_FIVE: "5개 일치 (",
  MATCH_FIVE_BONUS: "5개 일치, 보너스 볼 일치 (",
  MATCH_SIX: "6개 일치 (",
  MATCH_PRIZE: "원) - ",
  MATCH_COUNT: "개",
  CALCULATE_RATE: "총 수익률은 ",
  CALCULATE_PERCENT: "%입니다.",
});

const PRIZE = Object.freeze({
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVE_BONUS: 30000000,
  SIX: 2000000000,
});

const ERROR = Object.freeze({
  MONEY_TYPE: "[ERROR] 구입금액은 숫자여야 합니다.",
  MONEY_ZERO: "[ERROR] 구입금액은 0원일 수 없습니다.",
  MONEY_UNIT: "[ERROR] 구입금액을 1,000원 단위로 입력해 주세요.",
  NUMBERS_TYPE: "[ERROR] 로또 번호는 숫자여야 합니다.",
  NUMBERS_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  NUMBERS_RANGE: "[ERROR] 로또 번호의 숫자 범위는 1~45까지입니다.",
  NUMBERS_DUPLICATED: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  BONUS_NUMBER_INCLUDED:
    "[ERROR] 보너스 번호는 입력한 당첨 번호에 포함될 수 없습니다.",
});

module.exports = {
  LOTTO_PRICE,
  MESSAGE,
  PRIZE,
  ERROR,
};
