const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants/constant');
class App {
  play() {
    Console.readLine(MESSAGE.INPUT_MONEY, (inputMoney) => {
      this.isValidInputMoney(inputMoney);
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
}
let app = new App();
app.play();
module.exports = App;
