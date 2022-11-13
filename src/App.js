const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./lotto/Lotto.js');
const CONSTANT = require('./constant/constants.js');

const { Console, Random } = MissionUtils;

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
  }

  getAmount() {
    const { MSG, UNIT } = CONSTANT;
    Console.readLine(`${MSG.PURCHASE}\n`, answer => {
      this.validateAmount(answer);
      this.#amount = +answer;
      this.generateLotto(this.#amount / UNIT);
      this.printLottos();
      this.getWinner();
    });
  }

  validateAmount(amount) {
    const { CHECK, ERROR_MSG } = CONSTANT;
    if (!CHECK.ISNUMBER(amount) || CHECK.ISUNIT(amount))
      throw new Error(`${ERROR_MSG.WRONG_AMOUNT}`);
  }

  generateLotto(num) {
    this.#lottos = Array.from(
      { length: num },
      () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)),
    );
  }

  printLottos() {
    const { PURCHASED } = CONSTANT.MSG;
    Console.print(`\n${PURCHASED(this.#amount)}`);
    this.#lottos.forEach(lotto =>
      Console.print(`[${lotto.numbers.toString().split(',').join(', ')}]`),
    );
  }

  getWinner() {
    const { WINNER } = CONSTANT.MSG;
    Console.readLine(`\n${WINNER}\n`, answer => {
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
      }),
    );
  }

  getBonus() {
    const { BONUS } = CONSTANT.MSG;
    Console.readLine(`\n${BONUS}\n`, answer => {
      this.checkBonus(answer);
      this.printWinner();
      Console.close();
    });
  }

  checkBonus(bonus) {
    const { SECOND_RANK } = CONSTANT;
    this.#lottos
      .filter(lotto => lotto.count === SECOND_RANK && lotto.numbers.includes(bonus))
      .forEach(lotto => lotto.setIsBonus());
  }

  printWinner() {
    Console.print('\n당첨 통계\n---');
    const { RESULT } = CONSTANT.MSG;
    CONSTANT.PRIZE.forEach(constant => {
      const { MATCH, ISBONUS, PRIZE } = constant;
      const getNumOfWinner = this.#lottos.filter(lotto => lotto.count === MATCH).length;

      Console.print(`${RESULT(MATCH, ISBONUS, PRIZE, getNumOfWinner)}`);
      this.#prize += getNumOfWinner * +PRIZE.replace(/\D/g, '');
    });
    this.printEarningsRate();
  }

  printEarningsRate() {
    const { MSG, GET_RATE } = CONSTANT;
    const earningsRate = GET_RATE(this.#prize, this.#amount);
    Console.print(`${MSG.TOTAL_RATE(earningsRate)}`);
  }

  play() {
    this.getAmount();
  }
}

const app = new App();
app.play();

module.exports = App;
