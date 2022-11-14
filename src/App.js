const { Console, Random } = require('@woowacourse/mission-utils');
const { UNIT, PRIZE, MATCHED } = require('./constants/Lotto');
const { REQUEST, PRINT } = require('./constants/Message');
const Lotto = require('./Lotto');
const Validator = require('./Validator');

class App {
  #money;
  #winningNumbers;
  #bonusNumber;
  #lottos;
  #matched;

  constructor() {
    this.#lottos = [];
    this.#matched = [0, 0, 0, 0, 0];
  }

  play() {
    Console.readLine(REQUEST.MONEY, (input) => {
      this.buyLottos(input);
      this.printLottos();
      this.readWinningNumbers();
    });
  }

  buyLottos(money) {
    Validator.validateMoney(money);
    this.#money = Number(money);
    for (let i = 0; i < money / UNIT.PURCHASE; i += 1) this.issueLotto();
  }

  issueLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      UNIT.RANGE_BEGIN,
      UNIT.RANGE_END,
      UNIT.NUMBER_LENGTH
    );
    const lotto = new Lotto(numbers);
    this.#lottos.push(lotto);
  }

  printLottos() {
    Console.print(`\n${this.#lottos.length}${PRINT.PURCHASE}`);
    this.#lottos.forEach((lotto) => lotto.printNumbers());
  }

  setWinningNumbers(numbers) {
    Validator.validateLottoNumbers(numbers);
    this.#winningNumbers = numbers.map((number) => Number(number));
  }

  setBonusNumber(number) {
    Validator.isInRange(number);
    Validator.validateBonusNumber(Number(number), this.#winningNumbers);
    this.#bonusNumber = Number(number);
  }

  readWinningNumbers() {
    Console.readLine(REQUEST.WINNING_NUMBERS, (input) => {
      this.setWinningNumbers(input.split(','));
      Console.readLine(REQUEST.BONUS_NUMBER, (input) => {
        this.setBonusNumber(input);
        this.#lottos.forEach((lotto) => this.calculateMatched(lotto));
        this.printResult();
      });
    });
  }

  calculateMatched(lotto) {
    const correct = lotto.getNumberOfMatch(this.#winningNumbers);
    if (correct === 3) this.#matched[MATCHED.THREE] += 1;
    if (correct === 4) this.#matched[MATCHED.FOUR] += 1;
    if (correct === 5) {
      this.#matched[
        lotto.hasNumber(this.#bonusNumber) ? MATCHED.FIVE_BONUS : MATCHED.FIVE
      ] += 1;
    }
    if (correct === 6) this.#matched[MATCHED.SIX] += 1;
  }

  getEarningRate() {
    const prize = this.#matched.reduce(
      (acc, matchedNumber, index) => acc + matchedNumber * PRIZE[index],
      0
    );
    return (prize / this.#money) * 100;
  }

  printResult() {
    const RESULT = PRINT.RESULT;
    Console.print(RESULT.HEADER);
    Console.print(
      `${RESULT.THREE}${this.#matched[MATCHED.THREE]}${RESULT.UNIT}`
    );
    Console.print(`${RESULT.FOUR}${this.#matched[MATCHED.FOUR]}${RESULT.UNIT}`);
    Console.print(`${RESULT.FIVE}${this.#matched[MATCHED.FIVE]}${RESULT.UNIT}`);
    Console.print(
      `${RESULT.FIVE_BONUS}${this.#matched[MATCHED.FIVE_BONUS]}${RESULT.UNIT}`
    );
    Console.print(`${RESULT.SIX}${this.#matched[MATCHED.SIX]}${RESULT.UNIT}`);
    this.printEarningRate();
  }

  printEarningRate() {
    const EARNING = PRINT.EARNING;
    Console.print(
      `${EARNING.HEADER}${this.getEarningRate().toFixed(1)}${EARNING.FOOTER}`
    );
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
