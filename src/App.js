const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGES, ERROR_MESSAGES } = require('./constants/index');

const LOTTO_PRICE = 1000;
class App {
  #buyLotto = [];
  #winningLotto = [];

  play() {
    Console.readLine(MESSAGES.INPUT_MONEY, (number) => {
      if (number % LOTTO_PRICE !== 0)
        throw new Error(ERROR_MESSAGES.INVALID_MONEY_UNIT);

      this.buy(Number(number / LOTTO_PRICE));
    });
  }

  buy(count) {
    Console.print(MESSAGES.BUY_COUNT(count));

    for (let index = 1; index <= count; index++) {
      const randomLotto = this.randomLotto();

      this.#buyLotto.push(randomLotto);
      Console.print(randomLotto);
    }
    this.lottoInput();
  }

  randomLotto() {
    const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    if (!randomNumbers) throw new Error(ERROR_MESSAGES.EMPTY_NUMBERS);
    return randomNumbers.sort((a, b) => a - b);
  }

  checkValidLotto(numbers = []) {
    const numberSet = new Set(numbers);

    if (numbers.length !== 6)
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_LENGTH);
    if (numbers.find((number) => number < 1 || number > 45))
      throw new Error(ERROR_MESSAGES.INVALID_LOTTO_RANGE);
    if (numberSet.size !== 6)
      throw new Error(ERROR_MESSAGES.NOT_DUPLICATE_NUMBER);
  }

  checkValidBonus(number) {
    if (number.length !== 1)
      throw new Error(ERROR_MESSAGES.INVALID_BONUS_LENGTH);
    if (this.#winningLotto.includes(number))
      throw new Error(ERROR_MESSAGES.NOT_DUPLICATE_NUMBER);
  }

  lottoInput() {
    Console.readLine(MESSAGES.INPUT_LOTTO_NUMBERS, (numbers) => {
      const splittedNumbers = numbers.split(',');
      this.checkValidLotto(splittedNumbers);

      this.#winningLotto = splittedNumbers;
      this.bonusInput();
    });
  }

  bonusInput() {
    Console.readLine(MESSAGES.INPUT_BONUS_NUMBER, (number) => {
      this.checkValidBonus(number);
    });
  }
}

module.exports = App;
