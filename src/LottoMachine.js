const { Console, Random } = require("@woowacourse/mission-utils");
const LOTTO = require("./constants/constants");
const MESSAGE = require("./constants/message");
const Lotto = require("./Lotto");

class LottoMachine {
  #payment;
  #winningNumbers;
  #bonusNumber;

  getPayment() {
    Console.readLine(MESSAGE.REQUEST.PAYMENT, (payment) => {
      this.validatePayment(payment);

      this.#payment = payment;
    });
  }

  getWinningNumbers() {
    Console.readLine(MESSAGE.REQUEST.WINNING_NUMBERS, (numbers) => {
      this.#winningNumbers = numbers.split(",");

      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.REQUEST.BONUS_NUMBER, (number) => {
      this.#bonusNumber = number;
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

  isNotANumber(number) {
    return isNaN(Number(number));
  }

  isChange(number) {
    return number % LOTTO.PRICE === 0;
  }

  validateWinningNumbers(numbers) {
    if (this.isOutOfRange(numbers)) throw new Error(MESSAGE.ERROR.OUT_OF_RANGE_NUMBER);
    if (numbers.some(this.isNotANumber)) throw new Error(MESSAGE.ERROR.WINNING_NUMBER_MUST_BE_NUMBER);
  }

  isOutOfRange(numbers) {
    return !numbers.every((number) => number >= LOTTO.MIN_NUMBER && number <= LOTTO.MAX_NUMBER);
  }
}

module.exports = LottoMachine;
