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
  #winningNumbers;
  #bonusNumber;
  #lottos;
  #correct;

  constructor() {
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
    this.#lottos = [];
    this.#correct = [0, 0, 0, 0, 0, 0];
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

  tryMatching(lotto) {
    const correct = lotto.filter((number) =>
      this.#winningNumbers.includes(number)
    ).length;

    switch (correct) {
      case 3:
        this.#correct[CORRECT_THREE] += 1;
        break;
      case 4:
        this.#correct[CORRECT_FOUR] += 1;
        break;
      case 5:
        this.#correct[
          lotto.includes(this.#bonusNumber) ? CORRECT_FIVE_BONUS : CORRECT_FIVE
        ] += 1;
        break;
      case 6:
        this.#correct[CORRECT_SIX] += 1;
        break;
      default:
        break;
    }
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
