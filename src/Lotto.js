const { error_message } = require("./const");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(error_message.not_six_numbers);
    }
    this.checkRange(numbers);
    this.checkDuplicates(numbers);
    this.checkAllNumbers(numbers);
  }

  // TODO: 추가 기능 구현
  checkAllNumbers(numbers) {
    if (numbers.filter((number) => isNaN(number)).length > 0) {
      throw new Error(error_message.not_all_numbers);
    }
  }

  checkRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45)
        throw new Error(error_message.not_valid_range);
    });
  }

  checkDuplicates(numbers) {
    const uniqueNums = new Set(numbers);
    if (uniqueNums.size !== 6)
      throw new Error(error_message.not_unique_numbers);
  }
}

module.exports = Lotto;
