const LOTTERY_PRICE = 1000;

class LottoGame {
  constructor(LottoGameView) {
    this.view = LottoGameView;
    this.lotteries = [];
  }

  setPurchaseAmount(purchaseAmount){
    this.validate(purchaseAmount);
    this.purchaseAmount = purchaseAmount;
  }

  validate(purchaseAmount) {
    if (Number.isNaN(purchaseAmount)) {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }

    if ((purchaseAmount < LOTTERY_PRICE)) {
      throw new Error(`[ERROR] 최소 입력 금액은 ${LOTTERY_PRICE}원입니다.`);
    }

    if (!Number.isInteger(purchaseAmount) || purchaseAmount % LOTTERY_PRICE) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.")
    }
  }
}

module.exports = LottoGame;
