const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants/constant');
const Lotto = require('./Lotto');
class App {
  constructor() {
    this.count = 0;
    this.lotto = [];
    this.winningNumber = [];
    this.money = 0;
    this.bounsNumber = 0;
  }
  play() {
    Console.readLine(MESSAGE.INPUT_MONEY, (input) => {
      this.money = input;
      this.isValidInputMoney();
      this.count = this.countLotto(this.money);
      Console.print(`${this.count}개를 구매했습니다.`);
      this.getLotto(this.count);
      this.printLotto();
      this.getWinningNumber();
    });
  }
  isValidInputMoney() {
    this.isNumber();
    this.isDisvisible();
  }
  isNumber() {
    if (Number.isNaN(parseInt(this.money, 10))) {
      throw new Error('[ERROR] 숫자를 입력하세요.');
    }
  }
  isDisvisible() {
    if (this.money % 1000 !== 0) {
      throw new Error('[ERROR] 1000으로 나누어 떨어지도록 입력하세요.');
    }
  }
  countLotto(money) {
    return money / 1000;
  }
  getLotto(count) {
    while (this.lotto.length < count) {
      let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lotto.push(lotto);
    }
  }
  printLotto() {
    this.lotto.map((lottoArr) => {
      lottoArr.sort((a, b) => a - b);
      Console.print(lottoArr);
    });
  }
  getWinningNumber() {
    Console.readLine(MESSAGE.INPUT_GOAL, (input) => {
      this.winningNumber = input.split(',');
      this.isValidWinningNumber();
    });
  }
  isValidWinningNumber() {
    const lotto = new Lotto(this.winningNumber);
    Console.print(this.winningNumber);
    this.getBonusNumber();
  }
  getBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUSNUMBER, (input) => {
      this.bounsNumber = input;
    });
  }
}
let app = new App();
app.play();
module.exports = App;
