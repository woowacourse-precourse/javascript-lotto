const CONSOLE_MESSAGE = {
  INPUT_PURCHASE_MONEY: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_LOTTO: "당첨 번호를 입력해 주세요.\n",
  SHOW_PURCHASED_MONEY: "개를 구매했습니다.",
  INPUT_BONUS_LOTTO: "보너스 번호를 입력해 주세요.\n",
}

const RANK_STRING = {
  RANK_5: "3개 일치 (5,000원)",
  RANK_4: "4개 일치 (50,000원)",
  RANK_3: "5개 일치 (1,500,000원)",
  RANK_2: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  RANK_1: "6개 일치 (2,000,000,000원)",
}

const PRINT_RESULT = {
  TITLE: "당첨 통계\n---\n",
}

const WINNING_MONEY = {
  RANK_5: 5000,
  RANK_4: 50000,
  RANK_3: 1500000,
  RANK_2: 30000000,
  RANK_1: 2000000000,
}

function profitRateString(profitRate) {
  return `총 수익률은 ${profitRate}%입니다.`
}

const ERROR_MESSAGE = {
  PURCHASE_MONEY_ERROR: "[ERROR] 구매 금액은 1000원 이상이어야 합니다.",
  PURCHASE_IS_NAN_ERROR: "[ERROR] 구매 금액은 숫자여야 합니다.",
  WINNING_LOTTO_DUPLICATION_ERROR: "[ERROR] 당첨 번호는 중복 없는 6개 숫자여야 합니다.",
  BONUS_NUMBER_DUPLICATION_ERROR: "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
  NUMBER_RANGE_ERROR: "[ERROR] 추첨 번호는 1 ~ 45 사이여야 합니다.",
  NUMBER_IS_NAN_ERROR: "[ERROR] 추첨 번호는 숫자여야 합니다.",
  LOTTO_DUPLCATION_ERROR: "[ERROR] 로또 번호는 중복 없는 6개 숫자여야 합니다.",
}

module.exports = {CONSOLE_MESSAGE, RANK_STRING, PRINT_RESULT, WINNING_MONEY, ERROR_MESSAGE, profitRateString}