class LottoAdjustment {
  #scoreBoard;

  constructor({ draw, payment }) {
    this.draw = draw;
    this.payment = payment;

    this.#scoreBoard = [0, 0, 0, 0, 0];
  }

  #matchLottoFor(lottoToBuy) {
    return lottoToBuy.filter(lottoNumber =>
      this.draw.getNumber('lotto').includes(lottoNumber),
    ).length;
  }

  #matchBonusFor(lottoToBuy) {
    return lottoToBuy.includes(this.draw.getNumber('bonus'));
  }

  #setScoreToMatch([lottoCount, bonusCount]) {
    switch (true) {
      case lottoCount === 6:
        this.#scoreBoard[this.#scoreBoard.length - 1] += 1;
        break;
      case lottoCount === 5 && bonusCount:
        this.#scoreBoard[this.#scoreBoard.length - 2] += 1;
        break;
      case lottoCount >= 3 && lottoCount <= 5:
        this.#scoreBoard[lottoCount - 3] += 1;
        break;
      default:
        break;
    }
  }

  matchLottoCount() {
    [...this.payment.getBuyAt()]
      .map(lottoToBuy => [
        this.#matchLottoFor(lottoToBuy),
        this.#matchBonusFor(lottoToBuy),
      ])
      .forEach(([lottoCount, bonusCount]) => {
        this.#setScoreToMatch([lottoCount, bonusCount]);
      });
  }

  calculate() {
    this.matchLottoCount();

    return this.#scoreBoard;
  }
}

module.exports = LottoAdjustment;
