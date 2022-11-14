const MissionUtils = require('@woowacourse/mission-utils');
const LOTTO = require('../constant/constant');
const BonusNumber = require('./BonusNumber');
const Lotto = require('./Lotto');
const Money = require('./Money');

class LottoGame {
  #lottos = [];
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
    return this.#lottos;
  }

  getLottos() {
    const lottoNums = this.#money.money / LOTTO.PRICE;
    for (let x = 0; x < lottoNums; x++) {
      const lottoNumbers = this.getRandomNumber();
      this.#lottos.push(new Lotto(lottoNumbers));
    }
  }

  getRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.RANGE.START,
      LOTTO.RANGE.END,
      LOTTO.LENGTH
    ).sort((a, b) => a - b);
  }
}
module.exports = LottoGame;
