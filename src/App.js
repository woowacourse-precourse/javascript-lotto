const { Console, Random } = require('@woowacourse/mission-utils');
const { READ_MESSAGE, RESULT_MESSAGE } = require('./constants/message');
const Calculator = require('./Calculator');
const Lotto = require('./Lotto');
const Validator = require('./Validator');

class App {
  #calculator;
  #lottos;
  #winNumbers;
  #bonusNumber;
  #rankingCount;
  #profitRate;

  play() {
    this.#lottos = [];
    this.#rankingCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    this.recordPay();
  }

  recordPay() {
    Console.readLine(READ_MESSAGE.pay, (input) => {
      Validator.checkInput(input);
      const pay = Number(input);
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
    Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });

    this.recordWinNumbers();
  }

  recordWinNumbers() {
    Console.readLine(READ_MESSAGE.winNumbers, (input) => {
      Validator.checkInput(input);
      const winNumbers = input.split(',').map((number) => Number(number));
      Validator.checkLottoNumbers(winNumbers);
      this.#winNumbers = winNumbers;

      this.recordBonusNumber();
    });
  }

  recordBonusNumber() {
    Console.readLine(READ_MESSAGE.bonusNumber, (input) => {
      Validator.checkInput(input);
      const bonusNumber = Number(input);
      Validator.checkBonusNumber(bonusNumber, this.#winNumbers);
      this.#bonusNumber = bonusNumber;

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

    this.#profitRate = this.#calculator.calcProfitRate();
    this.printResult();
  }

  printResult() {
    Console.print(RESULT_MESSAGE.head);
    for (let ranking = 5; ranking >= 1; ranking--) {
      Console.print(`${RESULT_MESSAGE.rank[ranking]} - ${this.#rankingCount[ranking]}개`);
    }

    Console.print(`총 수익률은 ${this.#profitRate}%입니다.`);
    Console.close();
  }
}

module.exports = App;
