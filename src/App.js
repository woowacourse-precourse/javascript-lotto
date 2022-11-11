const { Console, Random } = require('@woowacourse/mission-utils');
const Calculator = require('./Calculator');
const Lotto = require('./Lotto');

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
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
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
    Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });

    this.recordWinNumbers();
  }

  recordWinNumbers() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (input) => {
      this.#winNumbers = input.split(',').map((number) => parseInt(number));
      this.recordBonusNumber();
    });
  }

  recordBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (input) => {
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

    this.#profitRate = this.#calculator
      .calcProfitRate()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    this.printResult();
  }

  printResult() {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${this.#rankingCount[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.#rankingCount[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.#rankingCount[3]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#rankingCount[2]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.#rankingCount[1]}개`);
    Console.print(`총 수익률은 ${this.#profitRate}%입니다.`);

    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
