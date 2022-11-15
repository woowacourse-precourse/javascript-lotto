const ThreeMatch = require('./ThreeMatch');
const FourMatch = require('./FourMatch');
const FiveMatch = require('./FiveMatch');
const FiveMatchWithBonus = require('./FiveMatchWithBonus');
const SixMatch = require('./SixMatch');

class LottoChecker {
  #histories;

  constructor(winningNumbers, bonusNumber) {
    this.#histories = [];
    this.#histories.push(new ThreeMatch(winningNumbers));
    this.#histories.push(new FourMatch(winningNumbers));
    this.#histories.push(new FiveMatch(winningNumbers));
    this.#histories.push(new FiveMatchWithBonus(winningNumbers, bonusNumber));
    this.#histories.push(new SixMatch(winningNumbers));
  }

  checkLottos(lottos) {
    lottos.forEach((lotto) => {
      this.checkLotto(lotto);
    });
    return this.#histories;
  }

  checkLotto(lotto) {
    [...this.#histories].reverse().some((history) => {
      return history.check(lotto);
    });
  }
}

module.exports = LottoChecker;
