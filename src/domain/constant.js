const PRICE_PER_LOTTO = 1000;
const MESSAGE = {
  startGame: "로또 게임을 시작합니다.",
  finishGame: "로또 게임을 종료합니다.",
  enterPurchaseAmount: "구입금액을 입력해 주세요.\n",
  enterWinningNumber: "당첨 번호를 입력해 주세요.\n",
  enterBonusNumber: "보너스 번호를 입력해 주세요.\n",
  winningStatistics: "당첨 통계\n---\n",
  firstPlace: "6개 일치 (2,000,000,000원) - ",
  secondPlace: "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
  thirdPlace: "5개 일치 (1,500,000원) - ",
  fourthPlace: "4개 일치 (50,000원) - ",
  fifthPlace: "3개 일치 (5,000원) - ",
  ea: "개",
  purchaseQuantity: (quantity) => `${quantity}개를 구매했습니다.\n`,
  totalRateOfReturn: (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.\n`,
};

module.exports = { PRICE_PER_LOTTO, MESSAGE };
