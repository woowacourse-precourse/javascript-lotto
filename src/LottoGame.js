class LottoGame {
  constructor(LottoGameView) {
    this.view = LottoGameView;
    this.lotteries = [];
  }

  setPurchaseAmount(purchaseAmount){
    this.purchaseAmount = purchaseAmount;
  }
}

module.exports = LottoGame;
