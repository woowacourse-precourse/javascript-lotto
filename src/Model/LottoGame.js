const BonusNumber = require('./BonusNumber');
const Money = require('./Money');

class LottoGame {
  #lottos;
  #winLotto;
  #bonusNumber;
  #money;

  get money() {
    return this.#money.money;
  }
  set money(input) {
    this.#money = new Money(input);
  }

  get bonusNumber() {
    return this.#bonusNumber.number;
  }
  set bonusNumber(input) {
    this.#bonusNumber = new BonusNumber(this.#winLotto, input);
  }

  get winLotto() {
    return this.#winLotto;
  }
  set winLotto(lotto) {
    this.#winLotto = lotto;
  }

  get lottos() {
    return this.#lottos.lottoArray;
  }
  set lottos(lottosArray) {
    this.#lottos = lottosArray;
  }
}
module.exports = LottoGame;
