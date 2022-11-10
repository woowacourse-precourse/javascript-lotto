const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants/constant');
class App {
  constructor() {
    this.count = 0;
    this.lotto = [];
  }
  play() {
    Console.readLine(MESSAGE.INPUT_MONEY, (inputMoney) => {
      this.isValidInputMoney(inputMoney);
      this.count = this.countLotto(inputMoney);
      Console.print(`${this.count}개를 구매했습니다.`);
      this.getLotto(this.count);
    });
  }
  isValidInputMoney(input) {
    this.isNumber(input);
    this.isDisvisible(input);
  }
  isNumber(input) {
    if (Number.isNaN(parseInt(input, 10))) {
      throw new Error('숫자를 입력하세요.');
    }
  }
  isDisvisible(input) {
    if (input % 1000 !== 0) {
      throw new Error('1000으로 나누어 떨어지도록 입력하세요.');
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
}
let app = new App();
app.play();
module.exports = App;
