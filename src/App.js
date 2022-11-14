const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGES, ERROR_MESSAGES } = require('./constants/index');

const LOTTO_PRICE = 1000;
class App {
  #money = 0;
  #buyLotto = [];
  #winningLotto = [];
  #bonusNumber;

  play() {
    Console.readLine(MESSAGES.INPUT_MONEY, (money) => {
      this.#money = money;
      if (money % LOTTO_PRICE !== 0)
        throw new Error(ERROR_MESSAGES.INVALID_MONEY_UNIT);

      this.buy(Number(money / LOTTO_PRICE));
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
    //TODO 보너스 번호 1자리만 입력한 것을 판단하는 방법
    // if (number.length !== 1)
    //   throw new Error(ERROR_MESSAGES.INVALID_BONUS_LENGTH);
    if (this.#winningLotto.includes(number))
      throw new Error(ERROR_MESSAGES.NOT_DUPLICATE_NUMBER);
  }

  lottoInput() {
    Console.readLine(MESSAGES.INPUT_LOTTO_NUMBERS, (numbers) => {
      const splittedNumbers = numbers.split(',');
      this.checkValidLotto(splittedNumbers);

      this.#winningLotto = splittedNumbers.map(Number);
      this.bonusInput();
    });
  }

  bonusInput() {
    Console.readLine(MESSAGES.INPUT_BONUS_NUMBER, (number) => {
      this.checkValidBonus(number);
      this.#bonusNumber = Number(number);

      this.getWinningStatistics();
    });
  }

  getWinningStatistics() {
    const correctPoints = [0, 0, 0, 0, 0];
    this.#buyLotto.forEach((lotto) => {
      let correctCount = 0;
      correctCount = lotto.filter((number) =>
        this.#winningLotto.includes(number)
      ).length;

      if (correctCount === 5 && lotto.includes(this.#bonusNumber))
        correctCount++;
      else if (correctCount === 6) correctCount++;

      if (correctCount >= 3) correctPoints[Number(correctCount) - 3]++;
    });
    const resultMoney = this.getWinningMoney(correctPoints);
    const rate = (resultMoney * 100) / this.#money;

    Console.print(
      MESSAGES.WINNING_STATS(correctPoints, Math.round(rate * 10) / 10)
    );
  }

  getWinningMoney(correctPoints = []) {
    const WINNING_MONEY = [5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000];

    const money = correctPoints.reduce(
      (acc, point, index) => (acc += WINNING_MONEY[index] * point),
      0
    );

    return money;
  }
}

module.exports = App;
