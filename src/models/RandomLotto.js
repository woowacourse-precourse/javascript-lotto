const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../Lotto');

class RandomLotto {
  #lottoArray = [];
  #lottoCount;

  constructor(money) {
    this.money = money;
    this.#lottoCount = money / 1000;
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
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers.sort((a, b) => a - b);
  }
}

module.exports = RandomLotto;
