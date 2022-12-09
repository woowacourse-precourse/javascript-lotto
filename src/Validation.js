class Validation {
  constructor() {
  }

  static isDividedByThousand(number){
    if (number % 1000 !== 0) throw new Error("[ERROR] 올바르지 않은 구입금액입니다.");
  }

  static isValidRangeNumber(number){
    if (number < 1 || number > 45) throw new Error("[ERROR] 로또 번호는 1에서 45사이여야 합니다.");
  }

  static isNotContained(numbers, bonus){
    if (numbers.some(number => number === parseInt(bonus))) throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  }

  static isEachUniqueNumber(numbers){
    if (new Set(numbers).size !== 6) throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
  }

  static isValidLength(numbers){
    if (numbers.length !== 6 ) throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }

  static isTrue(value){
    if (!value) throw new Error("[ERROR] 유효하지 않은 입력입니다.");
  }
}

module.exports = Validation;
