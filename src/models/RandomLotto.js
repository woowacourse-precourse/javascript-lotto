const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../Lotto');
const { LOTTO_COST, LOTTO_NUMBER } = require('../utils/Constants');

class RandomLotto {
  #lottoArray = [];
  #lottoCount;

  constructor(money) {
    this.money = money;
    this.#lottoCount = money / LOTTO_COST.cost;
    this.makeLotto();
  }

  get lottoArray() {
    return this.#lottoArray;
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  makeLotto() {
    for (let i = 0; i < this.#lottoCount; i++) {
      const randomLottoNumber = this.getRandomLottoNumber();
      const lotto = new Lotto(randomLottoNumber);
      this.lottoArray.push(lotto);
    }
  }

  getRandomLottoNumber() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(LOTTO_NUMBER.minimum, LOTTO_NUMBER.maximum, LOTTO_NUMBER.count);
    return randomNumbers.sort((a, b) => a - b);
  }
}

module.exports = RandomLotto;
