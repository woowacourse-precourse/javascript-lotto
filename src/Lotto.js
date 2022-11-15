const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (this.isDuplicate(numbers)) {
      throw new Error("[ERROR]");
    }
  }

  isDuplicate(numbers) {
    const duplicate = numbers.some(function(x) {
      return numbers.indexOf(x) !== numbers.lastIndexOf(x);
    });
    return duplicate;
  }
}

module.exports = Lotto;
