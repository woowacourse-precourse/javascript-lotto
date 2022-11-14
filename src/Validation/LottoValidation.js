class LottoValidation {
  static hasSixNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다. 종료합니다.");
    }
  }
  static isNotNumber(numbers) {
    numbers.map((number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자이어야 합니다. 종료합니다.");
      }
    });
  }
  static isBonusNotNumber(number) {
    if (isNaN(number)) {
      throw new Error("[ERROR] 로또 번호는 숫자이어야 합니다. 종료합니다.");
    }
  }
  static checkRange(numbers) {
    numbers.map((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 정수이어야 합니다. 종료합니다.");
      }
    });
  }
  static checkBonusRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 정수이어야 합니다. 종료합니다.");
    }
  }
  static isUniqueNumber(numbers) {
    let lottoSet = new Set([...numbers]);
    if (lottoSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복 숫자가 존재해서는 안 됩니다. 종료합니다.");
    }
  }
  static isBonusInteger(number) {
    if (!Number.isInteger(number)) {
      throw new Error("[ERROR] 보너스 번호는 정수만 가능합니다. 종료합니다.");
    }
  }
}

module.exports = LottoValidation;
