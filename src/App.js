const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const Validator = require('./Validator');
const {
  LOTTO_NUMBER_LENGTH,
  LOTTO_RANGE_BEGIN,
  LOTTO_RANGE_END,
  PRIZE,
  CORRECT_THREE,
  CORRECT_FOUR,
  CORRECT_FIVE,
  CORRECT_FIVE_BONUS,
  CORRECT_SIX,
} = require('./constants/lotto');

class App {
  #money;
  #winningNumbers;
  #bonusNumber;
  #lottos;
  #matching;

  constructor() {
    this.#winningNumbers = [];
    this.#lottos = [];
    this.#matching = [0, 0, 0, 0, 0];
  }

  issueLotto() {
    const numbers = Random.pickUniqueNumbersInRange(
      LOTTO_RANGE_BEGIN,
      LOTTO_RANGE_END,
      LOTTO_NUMBER_LENGTH
    );
    const lotto = new Lotto(numbers.sort((a, b) => a - b));
    this.#lottos.push(lotto);
  }

  buyLottos(money) {
    Validator.validateMoney(money);
    this.#money = Number(money);
    for (let i = 0; i < money / 1000; i += 1) this.issueLotto();
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
    this.#bonusNumber = Number(number);
  }

  calculateMatching(lotto) {
    const correct = lotto
      .getNumbers()
      .filter((number) => this.#winningNumbers.includes(number)).length;

    if (correct === 3) this.#matching[CORRECT_THREE] += 1;
    if (correct === 4) this.#matching[CORRECT_FOUR] += 1;
    if (correct === 5) {
      this.#matching[
        lotto.getNumbers().includes(this.#bonusNumber)
          ? CORRECT_FIVE_BONUS
          : CORRECT_FIVE
      ] += 1;
    }
    if (correct === 6) this.#matching[CORRECT_SIX] += 1;
  }

  getEarningRate() {
    let prize = 0;
    this.#matching.forEach(
      (matchedNumber, index) => (prize += matchedNumber * PRIZE[index])
    );

    return (prize / this.#money) * 100;
  }

  printResult() {
    this.#lottos.forEach((lotto) => this.calculateMatching(lotto));
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${this.#matching[CORRECT_THREE]}개
4개 일치 (50,000원) - ${this.#matching[CORRECT_FOUR]}개
5개 일치 (1,500,000원) - ${this.#matching[CORRECT_FIVE]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${
      this.#matching[CORRECT_FIVE_BONUS]
    }개
6개 일치 (2,000,000,000원) - ${this.#matching[CORRECT_SIX]}개
총 수익률은 ${this.getEarningRate().toFixed(1)}%입니다.`);

    Console.close();
  }

  readWinningNumbers() {
    Console.readLine('\n당첨 번호를 입력해주세요\n', (input) => {
      this.setWinningNumbers(input.split(','));
      Console.readLine('\n보너스 번호를 입력해주세요\n', (input) => {
        this.setBonusNumber(input);
        this.printResult();
      });
    });
  }

  play() {
    Console.readLine('구입 금액을 입력해주세요.\n', (input) => {
      this.buyLottos(input);
      this.printLottos();
      this.readWinningNumbers();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
