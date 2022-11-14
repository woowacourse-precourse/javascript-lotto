const INPUT_MESSAGE = {
  PURCHASE: "구입금액을 입력해 주세요.\n",
  WINNING: "당첨 번호를 입력해 주세요.\n",
  BONUS: "보너스 번호를 입력해 주세요.\n",
};
const ERROR_MESSAGE = {
  NOT_NUMBER: "[ERROR] 숫자를 입력해 주세요.",
  LESS_MONEY: "[ERROR] 돈이 부족합니다.",
  NOT_DIVIDED: "[ERROR] 1000으로 나누어 떨어지지 않습니다.",
  NOT_LENGTH_SIX: "ERROR] 로또 번호는 6개여야 합니다.",
  OVERLAP: "[ERROR] 로또 번호는 중복되지 않아야 합니다.",
  NOT_RANGE: "[ERROR] 로또 번호는 1 이상 45 이하 입니다.",
  SPLIT_COMMA: "[ERROR] 입력은 숫자와 ','로 구분해 입력해주세요.",
};
module.exports = { INPUT_MESSAGE, ERROR_MESSAGE };
