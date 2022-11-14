const LOTTO_VALUE = {
  MIN: 1,
  MAX: 45,
  LENGTH: 6,
  UNIT: 1000,
  WINNER_MIN_CNT: 3,
  FOUR_PRICE: 5000,
  THREE_PRICE: 50000,
  TWO_PRICE: 1500000,
  TWO_BONUS_PRICE: 30000000,
  ONE_PRICE: 2000000000,
};

const GAME_MESSAGE = {
  INPUT_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.",
  LOTTO_CNT: "개를 구매했습니다.",
  INPUT_WINNING_NUMBERS: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
  LOTTO_RESULT: "당첨 통계",
  RANK_ONE: "6개 일치 (2,000,000,000원) - ",
  RANK_TWO_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  RANK_TWO: "5개 일치 (1,500,000원) - ",
  RANK_THREE: "4개 일치 (50,000원) - ",
  RANK_FOUR: "3개 일치 (5,000원) - ",
  EARNING_RATE: "총 수익률은 ",
};

const ERROR_MESSAGE = {
  TYPE_ERROR: "[ERROR] 숫자를 입력해주세요.",
  UNIT_ERROR: "[ERROR] 1,000으로 나누어 떨어지는 금액을 입력해주세요.",
  RANGE_ERROR: "[ERROR] 1~45 범위의 값만 입력해주세요.",
  LENGTH_ERROR: "[ERROR] 값을 6개만 입력해주세요.",
  LOTTO_UNIQUE_ERROR: "[ERROR] 로또 번호가 중복됩니다.",
  BONUS_UNIQUE_ERROR:
    "[ERROR] 보너스 번호가 당첨 번호와 중복되지 않게 입력해주세요.",
};

module.exports = { GAME_MESSAGE, ERROR_MESSAGE, LOTTO_VALUE };
