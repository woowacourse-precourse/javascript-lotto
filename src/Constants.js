module.exports = {
  NOTICE_MESSAGE: Object.freeze({
    CASH: "\n구입금액을 입력해 주세요.\n",
    PURCHASE_AMOUNT: "개를 구매했습니다.",
    WINNING_NUMBERS: "\n당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  }),

  ERROR_MESSAGE: Object.freeze({
    CASH: "[ERROR] 잘못된 금액입니다. 금액은 숫자로 입력해주세요.",
    WINNING_NUMBERS: "[ERROR] 1부터 45까지의 정수 중 중복되지 않는 수 6개를 쉼표로 분리해 입력해주세요.",
    BONUS_NUMBER: "[ERROR] 1부터 45까지의 정수 중 하나를 입력해주세요.",
    DUPLICATED_BONUS_NUMBER: "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
  }),

  Price: Object.freeze({
    FIVE_THOUSAND: 5000,
    FIFTY_THOUSAND: 50000,
    FIVE_HUNDRED_THOUSAND: 1500000,
    THIRTY_MILLION: 30000000,
    TWO_BILLION: 2000000000,
  }),
};
