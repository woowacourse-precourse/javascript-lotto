const { Console, Random } = require('@woowacourse/mission-utils');
const Calculator = require('./Calculator');
const Lotto = require('./Lotto');

class App {
  #calculator;
  #lottos;
  #rankingCount;
  #winNumbers;
  #bonusNumber;

  constructor() {
    this.#lottos = [];
    this.#rankingCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

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
    for (let i = 0; i < this.#calculator.calcBuyCount(); i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(numbers.sort((a, b) => a - b));
      this.#lottos.push(lotto);
    }

    this.printLottos();
  }

  printLottos() {
    Console.print();
    Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });

    this.recordWinNumbers();
  }

  recordWinNumbers() {
    Console.print();
    Console.print('당첨 번호를 입력해 주세요.');
    Console.readLine('', (input) => {
      this.#winNumbers = input.split(',').map((number) => parseInt(number));
      this.recordBonusNumber();
    });
  }

  recordBonusNumber() {
    Console.print();
    Console.print('보너스 번호를 입력해 주세요.');
    Console.readLine('', (input) => {
      this.#bonusNumber = parseInt(input);
      this.calculateResult();
    });
  }

  calculateResult() {
    this.#lottos.forEach((lotto) => {
      const ranking = lotto.rank(this.#winNumbers, this.#bonusNumber);
      if (ranking === 0) return;

      this.#rankingCount[ranking] += 1;
      this.#calculator.addPrize(ranking);
    });

    this.printResult();
  }

  printResult() {}
}

const app = new App();
app.play();

module.exports = App;
