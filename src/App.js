const { Random } = require('@woowacourse/mission-utils');
const CONSTANT = require('./constant/constants.js');
const Lotto = require('./lotto/Lotto.js');
const Log = require('./views/Log.js');

const log = new Log();

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

  start(answer) {
    this.validateAmount(answer);
    this.#amount = +answer;
    this.generateLotto(this.#amount / CONSTANT.UNIT);
    log.printLottos(this.#amount, this.#lottos);
    log.getWinner(this.resultAndBonusHandler.bind(this));
  }

  validateAmount(amount) {
    const { CHECK, ERROR_MSG } = CONSTANT;
    if (!CHECK.ISNUMBER(amount) || CHECK.ISUNIT(amount))
      throw new Error(`${ERROR_MSG.WRONG_AMOUNT}`);
  }

  generateLotto(num) {
    this.#lottos = Array.from({ length: num }, () => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
  }

  resultAndBonusHandler(answer) {
    this.compareResults(answer);
    log.getBonus(this.end.bind(this));
  }

  compareResults(numbers) {
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

  end(answer) {
    this.checkBonus(answer);
    log.printWinner(this.#lottos, this.sumPrize.bind(this));
    log.printEarningsRate(this.#prize, this.#amount);
  }

  checkBonus(bonus) {
    const { SECOND_RANK } = CONSTANT;
    this.#lottos
      .filter(lotto => lotto.count === SECOND_RANK && lotto.numbers.includes(bonus))
      .forEach(lotto => lotto.setIsBonus());
  }

  sumPrize(getNumOfWinner, PRIZE) {
    this.#prize += getNumOfWinner * +PRIZE.replace(/\D/g, '');
  }

  play() {
    log.getAmount(this.start.bind(this));
  }
}

const app = new App();
app.play();

module.exports = App;
