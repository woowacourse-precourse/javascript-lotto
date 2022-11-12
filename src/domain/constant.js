const PRICE_PER_LOTTO = 1000;
const MESSAGE = {
  START_GAME: "로또 게임을 시작합니다.",
  FINISH_GAME: "로또 게임을 종료합니다.",
  ENTER_PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  ENTER_WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  ENTER_BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  WINNING_STATISTICS: "당첨 통계\n---\n",
  FIRST_PLACE: "6개 일치 (2,000,000,000원) - ",
  SECOND_PLACE: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  THIRD_PLACE: "5개 일치 (1,500,000원) - ",
  FOURTH_PLACE: "4개 일치 (50,000원) - ",
  FIFTH_PLACE: "3개 일치 (5,000원) - ",
  EA: "개",
  PURCHASE_QUANTITY: (quantity) => `${quantity}개를 구매했습니다.\n`,
  TOTAL_RATE_OF_RETURN: (rateOfReturn) =>
    `총 수익률은 ${rateOfReturn}%입니다.\n`,
};

module.exports = { PRICE_PER_LOTTO, MESSAGE };
