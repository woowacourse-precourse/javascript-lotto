const LOTTO_NUMBER_LIMIT = {
  LOTTO_NUMBER_MAX: 45,
  LOTTO_NUMBER_MIN: 1,
};

const LOTTO_PURCHASE_UNIT = 1000;

const WINNINGS = [50e2, 50e3, 150e4, 20e8, 30e6];

const ERROR_MESSAGE = {
  NUMBERS_NOT_SIX_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  NUMBERS_IN_DUPLICATE: "[ERROR] 로또 번호에 중복된 숫자가 있습니다.",
  NUMBERS_FIXED_NUMBER: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  BONUS_NUMBER_NO_SAME: "[ERROR] [ERROR] 보너스 번호는 로또 번호와 같을 수 없습니다.",
  BONUS_NUMBER_FIXED_NUMBER: "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
  INPUT_AMOUNT_BE_THOUSANDS_UNIT: "[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.",
};

const INPUT_MESSAGE = {
  INPUT_AMOUNT: "구입금액을 입력해 주세요.",
  INPUT_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
};

const OUPPUT_MESSAGE = {
  PURCHASE_COUNT: "개를 구매했습니다.",
  WINNING_STATISTICS: "당첨 통계\n---",
  FIRST_PLACE: "6개 일치 (2,000,000,000원) - ",
  SECOND_PLACE: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  THIRD_PLACE: "5개 일치 (1,500,000원) -",
  FOURTH_PLACE: "4개 일치 (50,000원) -",
  FIFTH_PLACE: "3개 일치 (5,000원) -",
  COUNT: "개",
  FRONT_REVENUE_RATE: "총 수익률은 ",
  BACK_REVENUE_RATE: "%입니다.",
};

module.exports = { LOTTO_NUMBER_LIMIT, LOTTO_PURCHASE_UNIT, WINNINGS, ERROR_MESSAGE, INPUT_MESSAGE, OUPPUT_MESSAGE};