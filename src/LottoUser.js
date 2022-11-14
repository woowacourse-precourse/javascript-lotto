const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class LottoUser {
  #amount;
  #lottoCount;
  #lottos;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
    this.#lottoCount = this.calcLottoCount(amount);
    this.#lottos = this.makeLottos(this.#lottoCount);
  }

  validate(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('[ERROR] 로또 구입 금액은 숫자여야 합니다.');
    }
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.');
    }
  }

  getAmount() {
    return this.#amount;
  }

  getLottos() {
    return this.#lottos;
  }

  calcLottoCount(amount) {
    return amount / 1000;
  }

  makeLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      lottos.push(new Lotto(this.makeRandomSixNumbers()));
    }
    return lottos;
  }

  makeRandomSixNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printUserLottos() {
    MissionUtils.Console.print('\n');
    MissionUtils.Console.print(`${this.#lottoCount}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => lotto.printLotto());
  }
}

module.exports = LottoUser;
