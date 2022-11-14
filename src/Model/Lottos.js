const MissionUtils = require('@woowacourse/mission-utils');
const LOTTO = require('../constant/constant');
const Lotto = require('./Lotto');

class Lottos {
  #lottoArray = [];
  constructor(lottoNums) {
    for (let x = 0; x < lottoNums; x++) {
      const lottoNumbers = this.getRandomNumber();
      this.#lottoArray.push(new Lotto(lottoNumbers));
    }
  }

  get lottoArray() {
    return this.#lottoArray;
  }

  getRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO.RANGE.START,
      LOTTO.RANGE.END,
      LOTTO.LENGTH
    ).sort((a, b) => a - b);
  }
}
module.exports = Lottos;
