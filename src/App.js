const MissionUtils = require('@woowacourse/mission-utils');
const userInput = require('./Input');
const Lotto = require('./Lotto');
const Output = require('./Output');

class App {
  lottoCount;
  lottoArray = [];

  constructor() {
    this.print = new Output();
  }

  play() {
    userInput.call(this, this.getLottos, () => {}, () => {}, () => {})
  }

  getLottos(money) {
    this.validMoney(money);
    this.lottoCount = money / 1000;
    this.print.printUserLottoCount(this.lottoCount);

    for (let i = 0; i < this.lottoCount; i++) {
      const randomLotto = this.getRandomLottoNumber();
      this.lottoArray.push(new Lotto(randomLotto));

      this.print.printUserLottoNumber(randomLotto);
    }
  }

  validMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위 입니다.');
    }
  }

  getRandomLottoNumber() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers.sort((a, b) => a - b);
  }
}

const app = new App();
app.play()

module.exports = App;
