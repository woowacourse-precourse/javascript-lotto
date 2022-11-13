const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Validator = require('./Validator');
const LOTTO = require('./constants/lotto');
const MESSAGE = require('./constants/message');

class App {
  #money;
  #winningNumbers;
  #bonusNumber;
  #lottos;
  #matching;

  constructor() {
    this.#lottos = [];
    this.#matching = [0, 0, 0, 0, 0];
  }

  play() {
    Console.readLine(MESSAGE.REQUEST_MONEY, (input) => {
      this.buyLottos(input);
      this.printLottos();
      this.readWinningNumbers();
    });
  }

  buyLottos(money) {
    Validator.validateMoney(money);
    this.#money = Number(money);
    for (let i = 0; i < money / 1000; i += 1) this.issueLotto();
  }

  issueLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO.RANGE_BEGIN,
      LOTTO.RANGE_END,
      LOTTO.NUMBER_LENGTH
    );
    const lotto = new Lotto(numbers.sort((a, b) => a - b));
    this.#lottos.push(lotto);
  }

  printLottos() {
    Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`)
    );
  }

  setWinningNumbers(numbers) {
    Validator.validateNumbers(numbers);
    this.#winningNumbers = numbers.map((number) => Number(number));
  }

  setBonusNumber(number) {
    Validator.isInRange(number);
    Validator.validateBonusNumber(Number(number), this.#winningNumbers);
    this.#bonusNumber = Number(number);
  }

  readWinningNumbers() {
    Console.readLine(MESSAGE.REQUEST_WINNING_NUMBERS, (input) => {
      this.setWinningNumbers(input.split(','));
      Console.readLine(MESSAGE.REQUEST_BONUS_NUMBER, (input) => {
        this.setBonusNumber(input);
        this.#lottos.forEach((lotto) => this.calculateMatching(lotto));
        this.printResult();
      });
    });
  }

  calculateMatching(lotto) {
    const correct = lotto
      .getNumbers()
      .filter((number) => this.#winningNumbers.includes(number)).length;

    if (correct === 3) this.#matching[LOTTO.CORRECT_THREE] += 1;
    if (correct === 4) this.#matching[LOTTO.CORRECT_FOUR] += 1;
    if (correct === 5) {
      this.#matching[
        lotto.getNumbers().includes(this.#bonusNumber)
          ? LOTTO.CORRECT_FIVE_BONUS
          : LOTTO.CORRECT_FIVE
      ] += 1;
    }
    if (correct === 6) this.#matching[LOTTO.CORRECT_SIX] += 1;
  }

  getEarningRate() {
    let prize = 0;
    this.#matching.forEach(
      (matchedNumber, index) => (prize += matchedNumber * LOTTO.PRIZE[index])
    );

    return (prize / this.#money) * 100;
  }

  printResult() {
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${this.#matching[LOTTO.CORRECT_THREE]}개
4개 일치 (50,000원) - ${this.#matching[LOTTO.CORRECT_FOUR]}개
5개 일치 (1,500,000원) - ${this.#matching[LOTTO.CORRECT_FIVE]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${
      this.#matching[LOTTO.CORRECT_FIVE_BONUS]
    }개
6개 일치 (2,000,000,000원) - ${this.#matching[LOTTO.CORRECT_SIX]}개
총 수익률은 ${this.getEarningRate().toFixed(1)}%입니다.`);

    Console.close();
  }
}

module.exports = App;
