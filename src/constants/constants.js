const INPUT_MESSAGE = {
  BUY_MONEY: "구입금액을 입력해 주세요\n",
  WINNING_NUM: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUM: "보너스 번호를 입력해 주세요.\n",
};

const PRINT_MESSAGE = {
  BUY_LOTTO: "개를 구매했습니다.",
  THREE_CORRECT: "3개 일치 (5,000원) - ",
  FOUR_CORRECT: "4개 일치 (50,000원) - ",
  FIVE_CORRECT: "5개 일치 (1,500,000원) - ",
  FIVE_CORRECT_AND_BONUS: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  SIX_CORRECT: "6개 일치 (2,000,000,000원) - ",
  COUNT: "개",
  YIELD_START: "총 수익률은 ",
  YIELD_END: "%입니다.",
};

const LOTTO = {
  PRICE: 1000,

  THREE_CORRECT_MONEY: 5000,
  FOUR_CORRECT_MONEY: 50000,
  FIVE_CORRECT_MONEY: 1500000,
  FIVE_CORRECT_AND_BONUS_MONEY: 30000000,
  SIX_CORRECT_MONEY: 2000000000,

  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",

  MONEY: "money",
  COUNT: "count",
};

module.exports = {
  INPUT_MESSAGE,
  PRINT_MESSAGE,
  LOTTO,
};
