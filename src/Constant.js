const ErrorMsg = Object.freeze({
  INVALID_LOTTO_COUNT: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_LOTTO_DUPLICATE: "[ERROR] 로또 번호는 중복을 포함할 수 없습니다.",
  INVALID_LOTTO_NOT_NUM: "[ERROR] 로또 번호는 숫자만 사용할 수 있습니다.",

  INVALID_PAY_EMPTY_STRING: "[ERROR] 입력값이 없습니다.",
  INVALID_PAY_NOT_NUM: "[ERROR] 구입금액은 숫자만 입력할 수 있습니다.",
  INVALID_PAY_UNIT: "[ERROR] 구입금액은 1000원 단위로 입력해야합니다.",

  INVALID_WINNING_EMPTY_STRING: "[ERROR] 입력값이 없습니다.",
  INVALID_WINNING_DUPLICATE: "[ERROR] 당첨 번호는 중복을 포함할 수 없습니다.",
  INVALID_WINNING_RANGE:
    "[ERROR] 당첨 번호는 1에서 45 사이의 번호만 입력 가능합니다.",
  INVALID_WINNING_COUNT: "[ERROR] 당첨 번호는 총 6개여야 합니다.",
  INVALID_WINNING_NOT_NUM: "[ERROR] 당첨 번호는 숫자만 입력 가능합니다.",
  INVALID_BONUS_DUPLICATE:
    "[ERROR] 당첨번호와 보너스 번호는 중복될 수 없습니다.",

  INVALID_BONUS_EMPTY_STRING: "[ERROR] 입력값이 없습니다.",
  INVALID_BONUS_RANGE:
    "[ERROR] 보너스 번호는 1부터 45사이의 번호만 입력 가능합니다.",
  INVALID_BONUS_NOT_NUM: "[ERROR] 보너스 번호는 숫자만 입력 가능합니다.",
});

const ResultMsg = Object.freeze({
  0: "3개 일치 (5,000원) - ",
  1: "4개 일치 (50,000원) - ",
  2: "5개 일치 (1,500,000원) - ",
  3: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  4: "6개 일치 (2,000,000,000원) - ",
});

const GuideMsg = Object.freeze({
  INPUT_PAY: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING: "당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS: "보너스 번호를 입력해 주세요.\n",
});

const ConstNumber = Object.freeze({
  PAY_UNIT: 1000,
  PERCENTAGE_NUM: 100,
  RANK_ARRAY_SIZE: 5,
});

module.exports = { ErrorMsg, ResultMsg, GuideMsg, ConstNumber };
