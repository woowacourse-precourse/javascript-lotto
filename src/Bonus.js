class Bonus {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validateBonusNumLength(numbers);
    this.validateBonusNumBetween1To45(numbers);
    this.validateBonusNumInteger(numbers);
  }

  validateBonusNumLength(numbers) {
    const numArr = [numbers];
    if (numArr.length !== 1) {
      throw new Error("[ERROR] 보너스 번호는 1개여야 합니다.");
    }
  }

  validateBonusNumBetween1To45(numbers) {
    if (numbers < 1 || numbers > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  validateBonusNumInteger(numbers) {
    if (!Number.isInteger(numbers)) {
      throw new Error("[ERROR] 보너스 번호는 정수여야 합니다.");
    }
  }
}

module.exports = Bonus;
