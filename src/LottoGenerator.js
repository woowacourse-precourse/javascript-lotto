const InputException = require('./InputException');
const { Random } = require('@woowacourse/mission-utils');
const { START_RANDOM_NUMBER, END_RANDOM_NUMBER, COUNT_PER_LINE } = require('./constans');
const { sortNumbers } = require('./util');

const inputException = new InputException();

class LottoGenerator {
  #generatedLotto;

  constructor() {
    this.#generatedLotto = [];
  }

  #calculateQuantity(amount) {
    inputException.handlePurchaseAmountException(amount);
    return amount / 1000;
  }

  #createRandomNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      START_RANDOM_NUMBER,
      END_RANDOM_NUMBER,
      COUNT_PER_LINE
    );

    return sortNumbers(randomNumbers);
  }

  getGeneratedLotto() {
    return this.#generatedLotto;
  }

  generate(amount) {
    const quantity = this.#calculateQuantity(amount);

    for (let i = 0; i < quantity; i++) {
      this.#generatedLotto[i] = this.#createRandomNumbers();
    }

    console.log(this.#generatedLotto);
  }
}

module.exports = LottoGenerator;
