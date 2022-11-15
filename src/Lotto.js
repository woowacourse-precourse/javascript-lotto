const { EXCEPTIONS, LOTTERY_INFO } = require('./constant/constant');
const { throwException } = require('./utils/Exception/Exceptions');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== LOTTERY_INFO.LOTTERY_LENGTH) {
      throwException(`${EXCEPTIONS.LENGTH_OVERFLOW}`);
    }
  }
  // TODO: 추가 기능 구현
  getLotteryNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
