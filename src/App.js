const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto.js');

const { Console,  Random } = MissionUtils;

class App {
  #lottos;

  #winner;

  #amount;

  #prize;

  constructor() {
    this.#lottos = [];
    this.#winner = [];
    this.#amount = 0;
    this.#prize = 0;
    this.constants = [
      { match: 3, prize: '5,000' },
      { match: 4, prize: '50,000' },
      { match: 5, prize: '1,500,000' },
      { match: 5, prize: '30,000,000', isBonus: true },
      { match: 6, prize: '2,000,000,000' }
    ];
  }

  getAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', answer => {
      this.validateAmount(answer);
      this.#amount = +answer;
      this.generateLotto(this.#amount / 1000);
      this.printLottos();
      this.getWinner();
    });
  }

  validateAmount(amount) {
    if (!/^\d+$/.test(amount) || +amount % 1000 !== 0) throw new Error("[ERROR] 올바른 금액을 입력하세요");
  }

  generateLotto(num) {
    this.#lottos = Array.from({ length: num }, () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
  }

  printLottos() {
    Console.print(`\n${this.#amount / 1000}개를 구매했습니다.`);
    this.#lottos.forEach(lotto => Console.print(lotto.numbers));
  }

  getWinner() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', answer => {
      this.getResults(answer);
      this.getBonus();
    });
  }

  getResults(numbers) {
    this.#winner = numbers.split(',').map(num => +num);
    this.compare();
  }

  compare() {
    this.#lottos.forEach(lotto =>
      lotto.numbers.forEach(num => {
        if (this.#winner.includes(num)) lotto.increaseCount();
      }));
  }

  getBonus() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', answer => {
      this.checkBonus(answer);
      this.printWinner();
    })
  }

  checkBonus(bonus) {
    this.#lottos
     .filter(lotto => lotto.count === 5 && lotto.numbers.includes(bonus))
     .forEach(lotto => lotto.setIsBonus());
  }

  printWinner() {
    Console.print('\n당첨 통계\n---');
    this.constants.forEach(constant => {
      const { match, isBonus, prize } = constant;
      const getNumOfWinner = this.#lottos.filter(lotto => lotto.count === match).length;

      Console.print(`${match}개 일치${isBonus ? ', 보너스 볼 일치' : ''} (${prize}원) - ${getNumOfWinner}개`);
      this.#prize += getNumOfWinner * +prize.replace(/\D/g, '');
    });
    this.printEarningsRate();
  }

  printEarningsRate() {
    const earningsRate = (this.#prize / this.#amount * 100).toFixed(1);
    Console.print(`총 수익률은 ${earningsRate}%입니다.`);
  }

  play() {
    this.getAmount();
  }
}

const app = new App();
app.play();

module.exports = App;
