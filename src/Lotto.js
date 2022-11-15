const { Console } = require('@woowacourse/mission-utils');
const Bonus = require('./Bonus');
const { LOTTO_ERROR } = require('./constants/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  inputBonus(myLotto) {
    Console.readLine(BONUS_NUMBER_MESSAGE, (answer) => {
      const bonus = new Bonus(answer, this.#numbers);
      this.result(myLotto, bonus.number);
      Console.close();
    });
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.LENGTH);
    }

    if (numbers.some((number) => /[^0-9]/.test(number))) {
      throw new Error(LOTTO_ERROR.NUMBER);
    }

    if (
      numbers.some(
        (number) => numbers.indexOf(number) !== numbers.lastIndexOf(number)
      )
    ) {
      throw new Error(LOTTO_ERROR.DUPLICATION);
    }

    if (numbers.some((number) => !(number >= 1 && number <= 45))) {
      throw new Error(LOTTO_ERROR.DOMAIN);
    }
  }
}

module.exports = Lotto;
