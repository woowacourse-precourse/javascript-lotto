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
const OUTPUT_MESSAGE = {
  PURCHASE: (count) => `\n${count}개를 구매했습니다.`,
  WINNING_NOTICE: "당첨 통계\n---",
  FIFTH: (count) => `3개 일치 (5,000원) - ${count}개`,
  FOURTH: (count) => `4개 일치 (50,000원) - ${count}개`,
  THIRD: (count) => `5개 일치 (1,500,000원) - ${count}개`,
  SECOND: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  FIRST: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  RESULT: (benefit) => `총 수익률은 ${benefit}%입니다.`,
};
const PRICE = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};
module.exports = { INPUT_MESSAGE, ERROR_MESSAGE, OUTPUT_MESSAGE, PRICE };
