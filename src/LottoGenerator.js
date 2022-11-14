const MissionUtils = require('@woowacourse/mission-utils');

class LottoGenerator {
  #lottoNumber;

  constructor(count) {
    this.count = count;
    this.makeLottoNumber();
  }

  makeLottoNumber() {
    const lottoArray = [];
    for (let i = 0; i < this.count; i++) {
      const makeLotto = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      ).sort((a, b) => a - b);
      lottoArray.push(makeLotto);
      MissionUtils.Console.print(`[${makeLotto.join(', ')}]`);
    }

    this.#lottoNumber = lottoArray;
  }

  getLottoNumber() {
    return this.#lottoNumber;
  }
}

module.exports = LottoGenerator;
