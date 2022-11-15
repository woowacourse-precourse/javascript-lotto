const LOTTO_NUMBERS = {
  MIN_RANGE : 1,
  MAX_RANGE : 45,
  NUMBER_SIZE : 6
}

const GRADE_NUMBER = {
  FIRST : 1,
  SECOND : 2,
  THIRD : 3,
  FOURTH : 4,
  FIFTH : 5
}

const GRADING_COUNT = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6
}

const INPUT_MESSAGE = {
  PURCHASE_MESSAGE : "구입금액을 입력해 주세요.\n",
  LOTTO_NUMBER : "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER : "보너스 번호를 입력해 주세요.\n"
}

const ERROR_MESSATE = {
  ISNAN: "[ERROR] 숫자만 입력해 주세요",
  RANGE: "[ERROR] 1~45의 범위로 입력해 주세요.",
  COUNT: "[ERROR] 6개의 숫자를 입력해 주세요.",
  DUPLICATED: "[ERROR] 중복된 숫자는 입력할 수 없습니다.",
  UNIT: "[ERROR] 1,000원 단위로 입력해 주세요.",
} 

module.exports = {
    LOTTO_NUMBERS,
    GRADE_NUMBER,
    GRADING_COUNT,
    INPUT_MESSAGE,
    ERROR_MESSATE
}