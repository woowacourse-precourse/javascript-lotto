const InputException = require('./InputException');
const { Random } = require('@woowacourse/mission-utils');
const { START_RANDOM_NUMBER, END_RANDOM_NUMBER, COUNT_PER_LINE, UNIT } = require('./constans');
const { sortNumbers } = require('./util');

const inputException = new InputException();

class LottoGenerator {
  #generatedLotto;

  constructor() {
    this.#generatedLotto = [];
  }

  #calculateQuantity(amount) {
    inputException.handlePurchaseAmountException(amount);
    return amount / UNIT;
  }

  #createRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      START_RANDOM_NUMBER,
      END_RANDOM_NUMBER,
      COUNT_PER_LINE
    );

    return sortNumbers(randomNumbers);
  }

  generate(amount) {
    const quantity = this.#calculateQuantity(amount);

    for (let i = 0; i < quantity; i++) {
      this.#generatedLotto[i] = this.#createRandomNumbers();
    }
  }

  getGeneratedLotto() {
    return this.#generatedLotto;
  }
}

module.exports = LottoGenerator;
