const MissionUtils = require("@woowacourse/mission-utils");
const UserError = require("./UserError");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const userError = new UserError();
    userError.includingCharactersError(numbers);
    userError.numbersFormError(numbers);
    userError.validateWinningNumbers(numbers);
    userError.validateNumberRange(numbers);
    userError.validateOverlapNumber(numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
