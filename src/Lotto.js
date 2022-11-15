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
    this.limitedNumber(numbers);
    this.notNumber(numbers);
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

  limitedNumber(numbers) {
    numbers.split(',').map((num) => {
      if (Number(num) > 45 || Number(num) < 1) {
        throw new Error('[ERROR] 숫자 1부터 45까지 입력해주세요.');
      }
    })
  }

  notNumber(numbers) {
    numbers.split(',').map((num) => {
      if (isNaN(num)) {
        throw new Error('[ERROR] 숫자만 입력해주세요.');
      }
    });
  }

  getNumber() {
    return this.#numbers;
  }
}

module.exports = Lotto;
