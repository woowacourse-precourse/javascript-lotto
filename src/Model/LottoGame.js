const LOTTO = require('../constant/constant');
const BonusNumber = require('./BonusNumber');
const Lottos = require('./Lottos');
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

  getLottos() {
    const lottoNums = this.#money.money / LOTTO.PRICE;
    this.#lottos = new Lottos(lottoNums);
  }
}
module.exports = LottoGame;
