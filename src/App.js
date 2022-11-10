const { Console, Random } = require('@woowacourse/mission-utils');
const Calculator = require('./Calculator');
const Lotto = require('./Lotto');

class App {
  #calculator;
  #lottos;
  #winNumbers;
  #bonusNumber;

  play() {
    this.recordPay();
  }

  recordPay() {
    Console.print('구입금액을 입력해 주세요.');
    Console.readLine('', (input) => {
      const pay = parseInt(input);
      this.#calculator = new Calculator(pay);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
