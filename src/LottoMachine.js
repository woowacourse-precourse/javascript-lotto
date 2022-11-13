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

      this.#payment = payment;

      this.getWinningNumbers();
    });
  }

  getWinningNumbers() {
    Console.readLine(MESSAGE.REQUEST.WINNING_NUMBERS, (numbers) => {
      this.#winningNumbers = numbers.split(",");
      this.validateWinningNumbers(this.#winningNumbers);

      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.REQUEST.BONUS_NUMBER, (number) => {
      this.validateBonusNumber(number);

      this.#bonusNumber = number;

      this.compareNumbers();
    });
  }

  compareNumbers() {
    const lottos = this.getRandomNumberLottos();

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

  getRandomNumberLottos() {
    const lottos = [];

    while (this.#payment !== 0) {
      const numbers = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.NUMBER_COUNT);
      const lotto = new Lotto(numbers);

      lottos.push(lotto.getNumbers());

      this.#payment -= LOTTO.PRICE;
    }

    return lottos;
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
