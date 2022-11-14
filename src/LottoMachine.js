const { Console, Random } = require("@woowacourse/mission-utils");
const LOTTO = require("./constants/constants");
const MESSAGE = require("./constants/message");
const Lotto = require("./Lotto");

class LottoMachine {
  constructor() {
    this.ranking = {
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      forthPlace: 0,
      fifthPlace: 0,
    };
  }
  #payment;
  #winningNumbers;
  #bonusNumber;

  getPayment() {
    Console.readLine(MESSAGE.REQUEST.PAYMENT, (payment) => {
      this.validatePayment(payment);

      this.#payment = Number(payment);

      this.getRandomNumberLottos();
    });
  }

  getWinningNumbers(lottos) {
    Console.readLine(MESSAGE.REQUEST.WINNING_NUMBERS, (numbers) => {
      this.#winningNumbers = numbers.split(",").map(Number);
      this.validateWinningNumbers(this.#winningNumbers);

      this.getBonusNumber(lottos);
    });
  }

  getBonusNumber(lottos) {
    Console.readLine(MESSAGE.REQUEST.BONUS_NUMBER, (number) => {
      this.validateBonusNumber(number);

      this.#bonusNumber = number;

      this.compareNumbers(lottos);
      this.printWinningStats();
      Console.close();
    });
  }

  compareNumbers(lottos) {
    lottos.forEach((lotto) => {
      let count = 0;

      lotto.forEach((number) => {
        if (this.#winningNumbers.includes(number)) {
          count++;
        }
      });

      if (count === 6) {
        this.ranking.firstPlace++;
        return;
      }

      if (count === 5 && lotto.includes(this.#bonusNumber)) {
        this.ranking.secondPlace++;
        return;
      }

      if (count === 5) {
        this.ranking.thirdPlace++;
        return;
      }

      if (count === 4) {
        this.ranking.forthPlace++;
        return;
      }

      if (count === 3) {
        this.ranking.fifthPlace++;
        return;
      }
    });
  }

  calculateRateOfReturn() {
    const winnings =
      this.ranking.fifthPlace * LOTTO.WINNINGS.FIFTH_PLACE +
      this.ranking.forthPlace * LOTTO.WINNINGS.FORTH_PLACE +
      this.ranking.thirdPlace * LOTTO.WINNINGS.THIRD_PLACE +
      this.ranking.secondPlace * LOTTO.WINNINGS.SECOND_PLACE +
      this.ranking.firstPlace * LOTTO.WINNINGS.FIRST_PLACE;

    return ((winnings / this.#payment) * 100).toFixed(1);
  }

  printWinningStats() {
    Console.print(`3개 일치 (5,000원) - ${this.ranking.fifthPlace}개
4개 일치 (50,000원) - ${this.ranking.forthPlace}개
5개 일치 (1,500,000원) - ${this.ranking.thirdPlace}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.ranking.secondPlace}개
6개 일치 (2,000,000,000원) - ${this.ranking.firstPlace}개
총 수익률은 ${this.calculateRateOfReturn()}%입니다.`);
  }

  getRandomNumberLottos() {
    const lottos = [];
    let payment = this.#payment;

    while (payment !== 0) {
      const numbers = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.WINNING_NUMBER_COUNT);
      numbers.sort((a, b) => a - b);

      const lotto = new Lotto(numbers);

      lottos.push(lotto.getNumbers());

      payment -= LOTTO.PRICE;
    }

    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(`[${lotto.join(", ")}]`));

    this.getWinningNumbers(lottos);
  }

  validatePayment(payment) {
    if (this.isNotANumber(payment)) throw new Error(MESSAGE.ERROR.PAYMENT_MUST_BE_NUMBER);
    if (!this.isChange(payment)) throw new Error(MESSAGE.ERROR.CHANGE_MUST_BE_ZERO);
  }

  validateWinningNumbers(numbers) {
    if (numbers.some(this.isOutOfRange)) throw new Error(MESSAGE.ERROR.OUT_OF_RANGE_NUMBER);
    if (numbers.some(this.isNotANumber)) throw new Error(MESSAGE.ERROR.WINNING_NUMBER_MUST_BE_NUMBER);
    if (this.isIncorrectCount(numbers, LOTTO.WINNING_NUMBER_COUNT)) throw new Error(MESSAGE.ERROR.WINNING_NUMBER_COUNT);
    if (this.isDuplicateNumbers(numbers)) throw new Error(MESSAGE.ERROR.WINNING_NUMBER_MUST_NOT_BE_DUPLICATE);
  }

  validateBonusNumber(number) {
    if (this.isOutOfRange(number)) throw new Error(MESSAGE.ERROR.OUT_OF_RANGE_NUMBER);
    if (this.isNotANumber(number)) throw new Error(MESSAGE.ERROR.BONUS_NUMBER_MUST_BE_NUMBER);
    if (this.isIncludeWinningNumbers(number)) throw new Error(MESSAGE.ERROR.BONUS_NUMBER_MUST_NOT_BE_INCLUDE_WINNING_NUMBERS);
  }

  isNotANumber(number) {
    return isNaN(Number(number));
  }

  isChange(number) {
    return number % LOTTO.PRICE === 0;
  }

  isOutOfRange(number) {
    return !(number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER);
  }

  isIncorrectCount(numbers, count) {
    return numbers.length !== count;
  }

  isDuplicateNumbers(numbers) {
    return numbers.length !== new Set(numbers).size;
  }

  isIncludeWinningNumbers(number) {
    return this.#winningNumbers.includes(number);
  }
}

module.exports = LottoMachine;
