const { VARIABLE_FACTORY } = require('../../utils/constants');

class LottoCalculator {
  #lotto;

  #bonus;

  #scoreBoard;

  #ERROR_MESSAGE = 'OVERIDING_ERROR';

  constructor(inputs) {
    this.#lotto = inputs.getInstance(VARIABLE_FACTORY.lotto);
    this.#bonus = inputs.getInstance(VARIABLE_FACTORY.bonus);
    this.payment = inputs.getInstance(VARIABLE_FACTORY.lottoStore);

    this.#scoreBoard = [0, 0, 0, 0, 0];

    this.#compareLotto();
  }

  getResult() {
    throw new Error(this.#ERROR_MESSAGE);
  }

  getLottoCountScore() {
    return this.#scoreBoard;
  }

  #matchLottoFor(lottoToBuy) {
    return lottoToBuy.filter(lottoNumber =>
      this.#lotto.getNumber().includes(lottoNumber),
    ).length;
  }

  #matchBonusFor(lottoToBuy) {
    return lottoToBuy.includes(this.#bonus.getNumber());
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

  #compareLotto() {
    this.payment
      .getLottos()
      .map(lottoToBuy => [
        this.#matchLottoFor(lottoToBuy),
        this.#matchBonusFor(lottoToBuy),
      ])
      .forEach(([lottoCount, bonusCount]) => {
        this.#setScoreToMatch([lottoCount, bonusCount]);
      });
  }
}

module.exports = LottoCalculator;
