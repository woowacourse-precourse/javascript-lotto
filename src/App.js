const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  lottoCount;
  lottoArray = [];

  play() {}

  getLottos(money) {
    this.validMoney(parseInt(money));
    this.lottoCount = parseInt(money) / 1000;
    for (let i = 0; i < this.lottoCount; i++) {
      const lotto = this.getRandomLottoNumber();
      this.lottoArray.push(new Lotto(lotto));
    }
  }

  validMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error('[Error] 구입 금액은 1,000원 단위 입니다.');
    }
  }

  getRandomLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = App;
