const LOTTO_MSG = Object.freeze({
  INPUT_MONEY: "구입금액을 입력해 주세요.\n",
  NUMBER_OF_PURCHASE: (numberOfPurchase) => `${numberOfPurchase}개를 구매했습니다.`,
  INPUT_LOTTO_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  INPUT_BONUS_NUMBERS: "보너스 번호를 입력해 주세요.\n",
  SHOW_RESULT: (result, priceRate) => `당첨 통계\n
  ---\n
  3개 일치 (5,000원) - ${result[0]}개\n
  4개 일치 (50,000원) - ${result[1]}개\n
  5개 일치 (1,500,000원) - ${result[2]}개\n
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[3]}개\n
  6개 일치 (2,000,000,000원) - ${result[4]}개\n
  총 수익률은 ${priceRate}%입니다.`,
});

const LOTTO_MIN = 1;
const LOTTO_MAX = 45;
const LOTTO_PRICE = 1000;
const LOTTO_NUMBERS_LENGTH = 6;
const RANK_PRICE = [5000, 50000, 1500000, 30000000, 2000000000];

module.exports = { LOTTO_MSG, LOTTO_MIN, LOTTO_MAX, LOTTO_PRICE, LOTTO_NUMBERS_LENGTH, RANK_PRICE };
