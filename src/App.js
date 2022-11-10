const { Console, Random } = require('@woowacourse/mission-utils');
const Validator = require('./Validator');

class App {
  constructor() {
    this.lottoCount = 0;
    this.userLottoNumbers = [];
  }

  play() {
    this.buyLotto();
  }

  buyLotto() {
    Console.print('구입금액을 입력해 주세요.');
    Console.readLine('', (money) => {
      Validator.throwErrorIfInValidMoney(money);
      this.lottoCount = money / 1000;
      this.issueLotto();
    });
  }

  issueLotto() {
    while (this.userLottoNumbers.length < this.lottoCount) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumbers.sort((a, b) => a - b);
      this.userLottoNumbers.push(randomNumbers);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
