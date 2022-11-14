const { Console } = require("@woowacourse/mission-utils");
const ERROR_MENTION = require('./constant/ErrorMention');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = String(numbers);
  }

  getLottoNumber() {
    let JackpotNumber = this.#numbers.split(',');
    return JackpotNumber;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      Console.close();
      throw new Error(ERROR_MENTION.lotto_number_length);
    }
    const duplicateSet = new Set(numbers);
    if (numbers.length !== duplicateSet.size) {
      Console.close();
      throw new Error(ERROR_MENTION.duplicate_lotto_number);
    }
  }
}

module.exports = Lotto;
