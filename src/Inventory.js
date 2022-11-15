const LottoPicker = require('./lib/LottoPicker');
const LottoScoreBoard = require('./LottoScoreBoard');
const Validator = require('./lib/Validator');

class Inventory {
  #lottos;
  #lottoScoreBoard = new LottoScoreBoard();

  generateLottoWithMoney(money) {
    Validator.errorIfMoneyInvalidFormat(money);
    const lottoCount = money / 1000;
    this.#lottos = [...LottoPicker.pickMultipleSortedLotto(lottoCount)];
  }

  getLottosData() {
    return this.#lottos;
  }

  getLottosDrawResult(winLotto, bonusNumber) {
    this.#calculateDrawResult(winLotto, bonusNumber);
    return this.#lottoScoreBoard.getLottosDrawResult();
  }

  #calculateDrawResult(winLotto, bonusNumber) {
    this.#lottos.forEach((currentLotto) => {
      const { sameCount, bonusSameCount } = this.#getLottoScore(
        currentLotto,
        winLotto,
        bonusNumber
      );

      this.#lottoScoreBoard.addLottoDrawResult(sameCount, bonusSameCount);
    });
  }

  #getLottoScore(currentLotto, winLotto, bonusNumber) {
    let sameCount = 0;
    let bonusSameCount = 0;

    currentLotto.forEach((currentNumber) => {
      if (winLotto.includes(currentNumber)) {
        sameCount += 1;
      }

      if (currentNumber === bonusNumber) {
        bonusSameCount += 1;
      }
    });

    return { sameCount, bonusSameCount };
  }
}

module.exports = Inventory;
