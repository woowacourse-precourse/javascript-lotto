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
    this.validateRange(numbers);
    this.validateDuplicate(numbers);
  }

  validateRange(numbers) {
    for (let index = 0; index < 6; index++) {
      if (!(1 <= Number(numbers[index]) && Number(numbers[index]) <= 45)) {
        throw new Error("[ERROR] 1 ~ 45 범위에 있어야 합니다.");
      }
    }
  }

  validateDuplicate(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
  }

  validateBonus(number) {
    if (isNaN(number)) {
      throw new Error("[ERROR] 숫자 1개만 입력하세요.");
    }
    this.validateBonusRange(number);
    this.validateBonusInclude(number);
  }

  validateBonusRange(number) {
    if (!(1 <= number && number <= 45)) {
      throw new Error("[ERROR] 1 ~ 45 범위에 있어야 합니다.");
    }
  }

  validateBonusInclude(number) {
    if (this.#numbers.includes(String(number))) {
      throw new Error(
        "[ERROR] 보너스 번호는 당첨 번호에 속하지 않아야 합니다."
      );
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
