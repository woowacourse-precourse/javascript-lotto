const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { ERROR_MESSAGE } = require('./constants.js');

class LottoUser {
  #amount;
  #lottoCount;
  #lottos;

  constructor(amount) {
    this.#amount = this.validate(amount);
    this.#lottoCount = this.calcLottoCount();
    this.#lottos = this.makeLottos(this.#lottoCount);
  }

  validate(amount) {
    if (!/^[0-9]+$/.test(amount)) {
      Lotto.handleError(ERROR_MESSAGE.TYPE);
    }
    if (amount % 1000 !== 0) {
      Lotto.handleError(ERROR_MESSAGE.DIVISED);
    }
    return parseInt(amount, 10);
  }

  getAmount() {
    return this.#amount;
  }

  getLottos() {
    return this.#lottos;
  }

  calcLottoCount() {
    return this.#amount / 1000;
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
