const { isValidNumber } = require('./utils/validations');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!numbers.includes(',')) {
      Console.close();
      throw new Error('[ERROR] 당첨 번호는 쉼표로 구분해야 합니다.');
    }

    const numbersArray = numbers.split(',');
    if (numbersArray.length === 6) {
      Console.close();
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    numbersArray.forEach((number) => {
      isValidNumber(number);
    });
  }
}

module.exports = Lotto;
