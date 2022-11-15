const MESSAGE = {
  BUYING_AMOUNT: "구입금액을 입력해 주세요.",
  BUYING_RESULT: "개를 구매했습니다.",
  INPUT_PRIZE: "당첨 번호를 입력해 주세요.",
  INPUT_BONUS: "보너스 번호를 입력해 주세요.",
  PRIZE_RESULT: "당첨 통계",
};

const CONDITION = {
  BASE_PRICE: 1000,
};

const ERR_MESSAGE = {
  ERR_LOTTO_NUM_LENGHT: "[ERROR] 로또 번호는 6개여야 합니다.",
  ERR_LOTTO_INPUT_VALUE: "[ERROR] 1000원 단위로 입력이 되어야합니다.",
  ERR_LOTTO_INCLUDE_STRING: "[ERROR] 문자열이 포함되어 있습니다.",
  ERR_LOTTO_OVERLAP_VALUE: "[ERROR] 중복된 숫자가 존재합니다.",
  ERR_LOTTO_VALID_VALUE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  ERR_LOTTO_CHECK_INCLUDE_BONUS:
    "[ERROR] 보너스 번호는 기존 번호와 달라야 합니다.",
};

const PRIZE_MONEY = {
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THIRD_PRIZE: 1500000,
  FOURTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
};
module.exports = { MESSAGE, CONDITION, ERR_MESSAGE, PRIZE_MONEY };
