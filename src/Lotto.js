const { Console } = require('@woowacourse/mission-utils');
const { convertToNumber } = require('./util/convert');
const {
  validateLength,
  validateDuplicate,
  validateNumberRange,
  validateDuplicateWithBonusNumber,
} = require('./util/validate');

class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.setBonusNumber();
  }

  validate(numbers) {
    validateLength(numbers);
    validateDuplicate(numbers);
    validateNumberRange(numbers);
  }

  setBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.\n', (answer) => {
      const convertedBonusNumber = convertToNumber(answer);
      validateDuplicateWithBonusNumber(this.#numbers, convertedBonusNumber);
      this.#bonusNumber = convertedBonusNumber;
    });
  }

  BonusNumber() {
    return this.#bonusNumber;
  }

  Lotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
