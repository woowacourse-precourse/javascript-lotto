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
      this.buyLottos();
    });
  }

  buyLottos() {
    this.#lottos = [];
    for (let i = 0; i < this.#calculator.calcBuyCount(); i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers.sort((a, b) => a - b));
      this.#lottos.push(lotto);
    }

    this.printLottos();
  }

  printLottos() {
    Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    });

    this.recordWinNumbers();
  }

  recordWinNumbers() {
    Console.print('당첨 번호를 입력해 주세요.');
    Console.readLine('', (input) => {
      this.#winNumbers = input.split(',');
      this.recordBonusNumber();
    });
  }

  recordBonusNumber() {
    Console.print('보너스 번호를 입력해 주세요.');
    Console.readLine('', (input) => {
      this.#winNumbers = input.split(',');
      this.printStatistics();
    });
  }

  printStatistics() {
    Console.print('당첨 통계');
  }
}

const app = new App();
app.play();

module.exports = App;
