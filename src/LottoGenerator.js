const MissionUtils = require('@woowacourse/mission-utils');

class LottoGenerator {
  #lottoNumber;
  constructor(count) {
    this.#lottoNumber = [];
    this.count = count;
    this.makeLottoNumber();
  }

  makeLottoNumber() {
    for (let i = 0; i < this.count; i++) {
      let makeLotto = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);

      this.#lottoNumber.push(Array.from(makeLotto));
    }
  }

  getLottoNumber() {
    return this.#lottoNumber;
  }
}

module.exports = LottoGenerator;
