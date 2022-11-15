const PRINT_PURCHASE_QUANTITY = (n) => `${n}개를 구매했습니다.`;
const PRINT_WINNING_RESULT = (list) => {
  return [
    `당첨 통계`,
    `---`,
    `3개 일치 (5,000원) - ${list[0]}개`,
    `4개 일치 (50,000원) - ${list[1]}개`,
    `5개 일치 (1,500,000원) - ${list[2]}개`,
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${list[4]}개`,
    `6개 일치 (2,000,000,000원) - ${list[3]}개`,
  ];
};
const PRINT_PROFIT_RATE = (n) => `총 수익률은 ${n}%입니다.`;
module.exports = {
  purchaseQuentity: PRINT_PURCHASE_QUANTITY,
  winningResult: PRINT_WINNING_RESULT,
  profitRate: PRINT_PROFIT_RATE,
};
