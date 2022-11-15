const AMOUNT_STANDARD = {
  ONE_THOUSAND_WON: 1000,
};

const APP_MESSAGE = {
  INPUT_AMOUNT: "구입금액을 입력해 주세요.\n",
  OUTPUT_PURCHASE_AMOUNT: (getLotteryAmount) =>
    `${getLotteryAmount}개를 구매했습니다.`,
  INPUT_WINNING_NUMBER: "\n당첨 번호를 입력해주세요.\n",
  INPUT_BONUS_NUMBER: "\n보너스 번호를 입력해주세요.\n",
  OUTPUT_WINNING_STATISTICS: "\n당첨 통계\n---",
};

const LOTTO_ERROR_MESSAGE = {
  LOTTO_NUMBER_AMOUNT_ERROR: "[ERROR] 잘못된 로또 구매 금액입니다.",
  LOTTO_NUMBER_LENGTH_ERROR:
    "[ERROR] 로또 번호는 6개의 숫자를 입력해야 합니다.",
  LOTTO_NUMBER_DOUBLE_ERROR: "[ERROR] 중복된 로또 번호가 입력되었습니다.",
  LOTTO_NUMBER_RANGE_ERROR:
    "[ERROR] 로또 번호는 1부터 45 사이의 숫자를 입력해야 합니다.",
};

const PRINT_LOTTO_MATCH = [
  (number) => `3개 일치 (5,000원) - ${number}개`,
  (number) => `4개 일치 (50,000원) - ${number}개`,
  (number) => `5개 일치 (1,500,000원) - ${number}개`,
  (number) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
  (number) => `6개 일치 (2,000,000,000원) - ${number}개`,
  (number) => `총 수익률은 ${number}%입니다.`,
];

module.exports = {
  APP_MESSAGE,
  AMOUNT_STANDARD,
  LOTTO_ERROR_MESSAGE,
  PRINT_LOTTO_MATCH,
};
