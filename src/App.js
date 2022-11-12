const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
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
const {
  ERROR_WRONG_LENGTH,
  ERROR_DUPLICATED,
  ERROR_WRONG_RANGE,
  ERROR_WRONG_MONEY,
} = require('./constants/error');

class App {
  #money;
  #winningNumbers;
  #bonusNumber;
  #lottos;
  #matching;

  constructor() {
    this.#winningNumbers = [];
    this.#lottos = [];
    this.#matching = [0, 0, 0, 0, 0, 0];
  }

  isDistinct(numbers) {
    let set = new Set(numbers);
    return numbers.length === set.size;
  }

  isInRange(number) {
    return (
      /^[0-9]+$/.test(number) &&
      number >= LOTTO_RANGE_BEGIN &&
      number <= LOTTO_RANGE_END
    );
  }

  validateNumbers(numbers) {
    if (numbers.length !== LOTTO_NUMBER_LENGTH) {
      throw new Error(ERROR_WRONG_LENGTH);
    }
    if (!this.isDistinct(numbers)) {
      throw new Error(ERROR_DUPLICATED);
    }

    numbers.forEach((number) => {
      if (!this.isInRange(Number(number))) {
        throw new Error(ERROR_WRONG_RANGE);
      }
    });
  }

  validateMoney(money) {
    if (
      !/^[0-9]+$/.test(money) ||
      Number(money) <= 0 ||
      Number(money) % 1000 !== 0
    ) {
      throw new Error(ERROR_WRONG_MONEY);
    }
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
    this.validateMoney(money);
    this.#money = money;
    for (let i = 0; i < money / 1000; i += 1) this.issueLotto();
  }

  printLottos() {
    Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
    this.#lottos.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`)
    );
  }

  setWinningNumbers(numbers) {
    this.validateNumbers(numbers);
    this.#winningNumbers = numbers;
  }

  setBonusNumber(number) {
    this.isInRange(number);
    this.#bonusNumber = number;
  }

  calculateMatching(lotto) {
    const correct = lotto
      .getNumbers()
      .filter((number) => this.#winningNumbers.includes(number)).length;

    if (correct === 3) this.#matching[CORRECT_THREE] += 1;
    if (correct === 4) this.#matching[CORRECT_FOUR] += 1;
    if (correct === 5) {
      this.#matching[
        lotto.includes(this.#bonusNumber) ? CORRECT_FIVE_BONUS : CORRECT_FIVE
      ] += 1;
    }
    if (correct === 6) this.#matching[CORRECT_SIX] += 1;
  }

  getEarningRate() {
    let prize = 0;
    this.#matching.forEach(
      (matchedNumber, index) => (prize += matchedNumber * PRIZE[index])
    );

    return prize / this.#money;
  }

  readWinningNumbers() {
    Console.readLine('당첨 번호를 입력해주세요\n', (input) => {
      this.setWinningNumbers(input.split(','));
      Console.readLine('보너스 번호를 입력해주세요\n', (input) => {
        this.setBonusNumber(input);
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
