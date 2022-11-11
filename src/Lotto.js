const MissionUtils = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.notComma(numbers);
    this.overlapCheck(numbers);
    this.lengthCheck(numbers);
    this.notNumberCheck(numbers);
  }

  notComma(numbers) {
    if (!numbers.includes(',')) {
      throw new Error("[ERROR] (,)로 구분하여 숫자를 입력해주세요.");
    }
  }

  overlapCheck(numbers) {
    const numberSplit = numbers.split(',');
    const numberSet = new Set(numberSplit);
    if (numberSet.size !== 6) {
        throw new Error("[ERROR] (,)로 구분하여 중복되지 않는 숫자를 입력해주세요.");
    }
  }

  lengthCheck(numbers) {
    const commaLength = numbers.split(',').length - 1;
    if (commaLength !== 5) {
        throw new Error("[ERROR] (,)로 구분하여 6자리 숫자를 입력해주세요. (예. 1,2,3,4,5,6)");
    }
  }

  notNumberCheck(numbers) {
    if (isNaN(numbers)) {
        throw new Error('[ERROR] 숫자만 입력해주세요.');
    }
  }
}

module.exports = Lotto;
