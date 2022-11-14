const { Console } = require("@woowacourse/mission-utils");

class Validation {
  static validateIsNotNumber(...numbers) {
    if (numbers.some((number) => /\D/.test(number))) {
      Console.close();
      throw new Error("[ERROR] 숫자만 입력해야 합니다.");
    }
  }
  static validateNumberRange(number) {
    if (0 > number || 45 < number) {
      Console.close();
      throw new Error("[ERROR] 1~45 사이의 숫자를 입력하여야 합니다.");
    }
  }

  static validateNumbersRange(numbers) {
    numbers.forEach(this.validateNumberRange);
  }

  static validateIsDivideThousand(budget) {
    if (budget % 1000) {
      Console.close();
      throw new Error("[ERROR] 천원 단위로 입력해야합니다.");
    }
  }
  static validateIsDuplicated(numbers) {
    const numbersSet = new Set(numbers);
    if (numbersSet.size !== numbers.length) {
      Console.close();
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 포함되어 있습니다.");
    }
  }
  static validateSizeIsSix(numbers) {
    if (numbers.length !== 6) {
      Console.close();
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
  static validateBonusNumber(number, lottoNumbers) {
    if (lottoNumbers.includes(number)) {
      Console.close();
      throw new Error("[ERROR] 보너스 번호가 중복 되었습니다.");
    }
  }
}

module.exports = Validation;
