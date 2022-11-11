const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Output = require('./Output');

class App {
  lottoCount;
  lottoArray = [];

  constructor() {
    this.print = new Output();
  }

  play() {}

  getLottos(money) {
    this.validMoney(parseInt(money));
    this.lottoCount = parseInt(money) / 1000;
    this.print.printUserLottoCount(this.lottoCount);
    for (let i = 0; i < this.lottoCount; i++) {
      const randomLotto = this.getRandomLottoNumber();
      this.lottoArray.push(new Lotto(randomLotto));

      this.print.printUserLottoNumber(randomLotto);
    }
  }

  validMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error('[Error] 구입 금액은 1,000원 단위 입니다.');
    }
  }

  getRandomLottoNumber() {
    const randomNumberArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return this.sortLottoNumber(randomNumberArray);
  }

  sortLottoNumber(array) {
    return array.sort((a, b) => {
      return a - b;
    });
  }
}

const app = new App();
app.getLottos(8000)

module.exports = App;
