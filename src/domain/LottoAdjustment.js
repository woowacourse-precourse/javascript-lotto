const { Console } = require('@woowacourse/mission-utils');
const { LOTTO_AMOUNT, VARIABLE_FACTORY } = require('../../utils/constants');

class LottoAdjustment {
  #lotto;

  #bonus;

  #payment;

  #scoreBoard;

  constructor(inputs) {
    this.#lotto = inputs.getInstance(VARIABLE_FACTORY.lotto);
    this.#bonus = inputs.getInstance(VARIABLE_FACTORY.bonus);
    this.#payment = inputs.getInstance(VARIABLE_FACTORY.lottoStore);

    this.#scoreBoard = [0, 0, 0, 0, 0];
  }

  print() {
    this.#compareLotto()
      .#template()
      .forEach(sentence => Console.print(sentence));

    Console.close();
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
    [...this.#payment.getLottos()]
      .map(lottoToBuy => [
        this.#matchLottoFor(lottoToBuy),
        this.#matchBonusFor(lottoToBuy),
      ])
      .forEach(([lottoCount, bonusCount]) => {
        this.#setScoreToMatch([lottoCount, bonusCount]);
      });

    return this;
  }

  #getIncome() {
    const result = String(
      Math.round(
        (LOTTO_AMOUNT.reduce((acc, moneyUnit, index) => {
          return acc + moneyUnit * this.#scoreBoard[index];
        }, 0) /
          this.#payment.getMoney()) *
          1000,
      ),
    ).split('');
    result.splice(result.length - 1, 0, '.');
    return result.join('');
  }

  #template() {
    return [
      `3개 일치 (5,000원) - ${this.#scoreBoard[0]}개`,
      `4개 일치 (50,000원) - ${this.#scoreBoard[1]}개`,
      `5개 일치 (1,500,000원) - ${this.#scoreBoard[2]}개`,
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#scoreBoard[3]}개`,
      `6개 일치 (2,000,000,000원) - ${this.#scoreBoard[4]}개`,
      `총 수익률은 ${this.#getIncome()}%입니다.`,
    ];
  }
}

module.exports = LottoAdjustment;
