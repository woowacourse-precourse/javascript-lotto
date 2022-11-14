const LOTTO_MESSAGE = Object.freeze({
  PLAYER_INPUT_MSG: [
    "구입금액을 입력해 주세요.\n",
    "당첨 번호를 입력해 주세요.\n",
    "보너스 번호를 입력해 주세요.\n",
  ],

  BUY_LOTTO_NUM_MSG: "개를 구매했습니다.",

  WIN_NUM_LENGTH_ERROR_MSG: "[ERROR] 당첨번호는 6개여야 합니다.",
  LOTTO_PRICE_ERROR_MSG: "[ERROR] 금액은 1000의 배수인 숫자이여야 합니다.",
  WIN_NUM_RANGE_ERROR_MSG: "[ERROR] 당첨번호는 1~45사의 숫자이어야합니다",
  WIN_NUM_DUPLICATE_ERROR_MSG: "[ERROR] 당첨번호는 중복되지 않아야 합니다",
  BONUS_NUM_ERROR_MSG:
    "[ERROR] 보너스번호는 1~45사이의 당첨번호와 중복되지않는 숫자이어야합니다",
});

const RESULT_MESSAGE = Object.freeze({
  FIFTH_LOTTERY: "3개 일치 (5,000원) - ",
  FOURTH_LOTTERY: "4개 일치 (50,000원) - ",
  THIRD_LOTTERY: "5개 일치 (1,500,000원) - ",
  SECOND_LOTTERY: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  FIRST_LOTTERY: "6개 일치 (2,000,000,000원) - ",
  RATE_OF_RETURN: "총 수익률은 ",
});

const LOTTO_SETTING = Object.freeze({
  LOTTO_PRICE: 1000,

  LOTTO_NUM_MIN: 1,
  LOTTO_NUM_MAX: 45,
  LOTTO_NUM_LENGTH: 6,

  INPUT_MONEY_ORDER: 0,
  INPUT_WIN_NUM_ORDER: 1,
  INPUT_BONUS_NUM_ORDER: 2,
  PLAYER_TOTAL_ORDER: 3,
});

const RESULT_MATCH_COUNT = Object.freeze({
  FIFTH_LOTTERY: 3,
  FOURTH_LOTTERY: 4,
  THIRD_LOTTERY: 5,
  FIRST_OR_SECOND_LOTTERY: 6,
});

const LOTTERY_OUTPUT_MONEY = Object.freeze({
  FIFTH_LOTTERY: 5000,
  FOURTH_LOTTERY: 50000,
  THIRD_LOTTERY: 1500000,
  SECOND_LOTTERY: 30000000,
  FIRST_LOTTERY: 200000000,
});

module.exports = {
  LOTTO_MESSAGE,
  LOTTO_SETTING,
  RESULT_MATCH_COUNT,
  RESULT_MESSAGE,
  LOTTERY_OUTPUT_MONEY,
};
