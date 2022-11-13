const MESSAGE = Object.freeze({
  INSERT_MONEY: "구매금액을 입력해 주세요.\n",
  INPUT_WINNINGNUMBERS: "당첨 번호를 입력해 주세요.\n",
  INPUT_BONUSNUMBER: "보너스 번호를 입력해 주세요.\n",
  PRINT_AMOUNT: "개를 구매했습니다.",

  ERROR_AMOUNT: "[ERROR] 구매금액은 1000원 이상이어야 합니다.",
  ERROR_DIVIDE: "[ERROR] 1000원으로 나누어 떨어져야 합니다.",

  ERROR_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  ERROR_RANGE: "[ERROR] 1 ~ 45 범위에 있어야 합니다.",
  ERROR_DUPLICATE: "[ERROR] 중복된 숫자가 있습니다.",

  ERROR_BONUS_LENGTH: "[ERROR] 숫자 1개만 입력하세요.",
  ERROR_BONUS_RANGE: "[ERROR] 1 ~ 45 범위에 있어야 합니다.",
  ERROR_BONUS_DUPLICATE:
    "[ERROR] 보너스 번호는 당첨 번호에 속하지 않아야 합니다.",
});

const CONSTANTS = Object.freeze({
  ONE_THOUSAND: 1000,
  ZERO: 0,
  MIN_LOTTO: 1,
  MAX_LOTTO: 45,
  LOTTO_MAX_COUNT: 6,
});

module.exports = { MESSAGE, CONSTANTS };
