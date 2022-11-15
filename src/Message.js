const REQUEST_MESSAGE = {
  MONEY: "구입금액을 입력해 주세요.\n",
  NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  LUCKY_NUMBER: "\n보너스 번호를 입력해 주세요.\n"
}

const ERROR_MESSAGE = {
  GAME_UNIT: "[ERROR] 1000원 단위만 입력이 가능합니다.",
  GAME_BLANK: "[ERROR] 구입금액이 입력되지 않았습니다.",
  GAME_FORM:'[ERROR] 입력형식이 올바르지 않습니다.',
  NUMBER_RANGE: "[ERROR] 1부터 45의 숫자만 입력이 가능합니다.",
  NUMBERS_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  SINGLE_NUMBER: "[ERROR] 하나의 숫자만 입력이 가능합니다.",
  ONLY_NUMBER: "[ERROR] 숫자만 입력이 가능합니다.",
  DUPLICATION: "[ERROR] 중복된 숫자는 입력이 불가능합니다.",
}

module.exports = {REQUEST_MESSAGE, ERROR_MESSAGE}
