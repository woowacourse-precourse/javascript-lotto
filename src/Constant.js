const READLINE_PHRASE = {
  INPUT_PURCHASE_AMMOUNT: "구입금액을 입력해 주세요.\n",
  INPUT_WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

const OUTPUT_PHRASE = {
  LINE_UP: "\n",
  PURCHASE_QUANTITY: "개를 구매했습니다.",
  WINNING_STATISTICS: {
    INTRO: "당첨 통계\n" + "---",
    THREE_MATCHES: "3개 일치 (5,000원) - ",
    FOUR_MATCHES: "4개 일치 (50,000원) - ",
    FIVE_MATCHES: "5개 일치 (1,500,000원) - ",
    FIVE_AND_BONUS_MATCHES: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
    ALL_MATCHES: "6개 일치 (2,000,000,000원) - ",
  },
};

const LOTTO_RANGE = {
  START_NUMBER: 1,
  END_NUMBER: 45,
  LENGTH: 6,
};

module.exports = { READLINE_PHRASE, OUTPUT_PHRASE, LOTTO_RANGE };
