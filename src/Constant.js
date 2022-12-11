/** 상수를 관리하는 역할을 한다 */
const LOTTO_PRICE_UNIT = 1000;

const RANDOM_RANGE_NUM = {
  minInclusive : 1,
  maxInclusive : 45,
  numberCount : 6
};

const WINNING_AMOUNT = [5000, 50000, 1500000, 30000000, 2000000000]

const INPUT_MESSAGE = {
  buyLottoMessage : "구입금액을 입력해 주세요.\n",
  winningNumbersMessage : "\n당첨 번호를 입력해 주세요.\n",
  bonusNumberMessage : "\n보너스 번호를 입력해 주세요.\n",
};



const OUTPUT_MESSAGE = {
  purchaseQuantityMessage : (num) => `\n${num}개를 구매했습니다.`,

  resultCommentMessage : ` \n당첨 통계\n---\n`,

  rateOfReturnMessage : (rateOfReturn) => `총 수익률은 ${rateOfReturn}%입니다.`
}
const RESULT_MESSAGE = {
    
  fifth : (fifth) => `3개 일치 (5,000원) - ${fifth}개\n`,
  fourth : (fourth) => `4개 일치 (50,000원) - ${fourth}개\n`,
  third : (third) => `5개 일치 (1,500,000원) - ${third}개\n`,
  second : (second) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${second}개\n`,
  first : (first) => `6개 일치 (2,000,000,000원) - ${first}개\n`,
}
module.exports = {INPUT_MESSAGE, RANDOM_RANGE_NUM, LOTTO_PRICE_UNIT,OUTPUT_MESSAGE,WINNING_AMOUNT,RESULT_MESSAGE}