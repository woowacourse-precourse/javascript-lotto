const messages = {
  PURCHASING_AMOUNT_MESSAGE: "구입금액을 입력해 주세요.\n",
  PURCHASING_AMOUNT_ERROR_MESSAGE:
    "[ERROR] 구입 금액은 1,000원 단위여야 하며, 1,000원으로 나누어 떨어져야 합니다.",
  USER_LOTTO_CONFIRMATION_MESSAGE: "개를 구매했습니다.",
  WINNING_NUMBER_MESSAGE: "\n당첨 번호를 입력해 주세요.\n",
  WINNING_NUMBER_ERROR_COMMA_NUMBER_MESSAGE:
    "[ERROR] 당첨번호는 ,(콤마) 로 나누어진 6개의 숫자이어야 합니다.",
  WINNING_NUMBER_ERROR_RANGE_MESSAGE:
    "[ERROR] 당첨번호는 1~45 사이의 숫자로 이루어져야 합니다.",
  WINNING_NUMBER_ERROR_UNIQUE_NUMBERS_MESSAGE:
    "[ERROR] 당첨번호는 겹치지 않는 6개의 숫자로 이루어져야 합니다.",
};

module.exports = messages;
