const PRIZE = {
  FIRST_PRIZE: 2_000_000_000,
  SECOND_PRIZE: 30_000_000,
  THIRD_PRIZE: 1_500_000,
  FORTH_PRIZE: 50_000,
  FIFTH_PRIZE: 5000,
};

const ERROR = {
  LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  BIG_NUMBER: "[ERROR] 숫자는 45보다 작아야 합니다.",
  SMALL_NUMBER: "[ERROR] 숫자는 1보다 커야 합니다.",
  DUPLICATED_NUMBER: "[ERROR] 중복된 값이 존재합니다.",
  NOT_NUMBER: "[ERROR] 숫자만 넣어주세요.",
  NOT_ENOUGH_MONEY: "[ERROR] 1000원 이상만 구매할 수 있습니다.",
  NOT_SAVE_RULE: "[ERROR] 숫자 사이에 , 를 넣어주세요.",
  MUST_BETWEEN_NUMBER: "[ERROR] 1 - 45 사이의 숫자를 넣어주세요.",
};

module.exports = { PRIZE, ERROR };
