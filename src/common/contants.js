
const REQUEST_MESSAGE = {
  MONEY: "구입금액을 입력해 주세요.\n",
  NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
  LUCKY_NUMBER: "\n보너스 번호를 입력해 주세요.\n"
}

const ERROR_MESSAGE = {
  GAME_UNIT: "[ERROR] 1000원 단위만 입력이 가능합니다.",
  NUMBER_RANGE: "[ERROR] 1부터 45의 숫자만 입력이 가능합니다.",
  NUMBERS_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
  SINGLE_NUMBER: "[ERROR] 하나의 숫자만 입력이 가능합니다.",
  ONLY_NUMBER: "[ERROR] 숫자만 입력이 가능합니다.",
  DUPLICATION: "[ERROR] 중복된 숫자는 입력이 불가능합니다."
}

const RESULT_MESSAGE = {
  PURCHAGE: "개를 구매했습니다.",
  TITLE: "\n당첨 통계",
  BORDER: "---",
  THREE: "3개 일치 (5,000원) - ",
  FOUR: "4개 일치 (50,000원) - ",
  FIVE: "5개 일치 (1,500,000원) - ",
  FIVE_LUCKY: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  SIX: "6개 일치 (2,000,000,000원) - ",
  UNIT: "개",
  YIELD_HEAD: "총 수익률은 ",
  YIELD_TAIL: "%입니다."
}

module.exports = {REQUEST_MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE}
