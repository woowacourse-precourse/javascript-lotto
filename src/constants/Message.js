const ERROR_MSG = {
  PURCHASE_AMOUT: "구입 금액을 다시 입력해주세요",

  WRONG_LENGTH: "로또 번호는 6개여야 합니다.",
  NOT_DUPLICATED: "로또 번호는 중복되면 안됩니다.",
  ONLY_NUMBER: "로또 번호는 숫자만 가능합니다",
  OVER_RANGE: "1~45 범위내 숫자만 가능합니다.",
  LOTTO_DUPLICATED: "당첨번호와 중복됩니다.",
};

const INPUT_MSG = {
  PURCHASE_AMOUT: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

const WINNING_MSG = {
  1: "6개 일치 (2,000,000,000원) - ",
  2: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  3: "5개 일치 (1,500,000원) - ",
  4: "4개 일치 (50,000원) - ",
  5: "3개 일치 (5,000원) - ",
};

const PRINT_MSG = {
  RESULT: "당첨통계\n---",
  BUY: "개를 구매했습니다.",
  COUNT: "개",
  RATE: "총 수익률은 ",
  SUFFIX: "입니다.",
};

module.exports = { ERROR_MSG, INPUT_MSG, WINNING_MSG, PRINT_MSG };
