const ERROR_MSG_PREFIX = "[ERROR] ";
const ERROR_MSG_MAIN_NUMS_COUNT =
  ERROR_MSG_PREFIX + "로또 번호의 개수는 6개여야 합니다.";
const ERROR_MSG_NUMS_NAN =
  ERROR_MSG_PREFIX + "로또 번호는 숫자형이어야 합니다.";
const ERROR_MSG_NUMS_INTEGER =
  ERROR_MSG_PREFIX + "로또 번호는 정수형이어야 합니다.";
const ERROR_MSG_NUM_RANGE =
  ERROR_MSG_PREFIX + "로또 번호는 1 이상 45 이하의 숫자여야 합니다.";
const ERROR_MSG_NUMS_DUPLICATED =
  ERROR_MSG_PREFIX + "로또 번호의 숫자가 중복되지 않아야 합니다.";
const ERROR_MSG_BONUS_NUM_IN_MAIN_NUMS =
  ERROR_MSG_PREFIX + "보너스 번호는 로또 번호와 중복되지 않아야 합니다.";
const ERROR_MSG_THOUSAND_UNIT =
  ERROR_MSG_PREFIX + "로또 구입 금액은 1,000원으로 나누어 떨어져야 합니다.";

module.exports = {
  ERROR_MSG_MAIN_NUMS_COUNT,
  ERROR_MSG_NUMS_NAN,
  ERROR_MSG_NUMS_INTEGER,
  ERROR_MSG_NUM_RANGE,
  ERROR_MSG_NUMS_DUPLICATED,
  ERROR_MSG_NUMS_DUPLICATED,
  ERROR_MSG_BONUS_NUM_IN_MAIN_NUMS,
  ERROR_MSG_THOUSAND_UNIT,
};
