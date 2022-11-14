const INPUT_MESSEGE = {
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.",
  WINNING_NUMBER: "당첨 금액을 입력해 주세요.",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.",
};

const LOTTO_NUMBER = {
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  COUNT: 6,
};

const RANK = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
  FIFTH: 5,
};

const WINNING_COUNT = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
};

const ERROR = {
  ISNAN: "[ERROR] 숫자만 입력해 주세요",
  RANGE: "[ERROR] 1~45의 범위로 입력해 주세요.",
  COUNT: "[ERROR] 6개의 숫자를 입력해 주세요.",
  DUPLICATED: "[ERROR] 중복된 숫자는 입력할 수 없습니다.",
  UNIT: "[ERROR] 1,000원 단위로 입력해 주세요.",
};

const UNIT = {
  DIVIDE: 1000,
};

module.exports = {
  INPUT_MESSEGE,
  LOTTO_NUMBER,
  RANK,
  WINNING_COUNT,
  UNIT,
  ERROR,
};
