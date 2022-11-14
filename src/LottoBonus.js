class LottoBonus {
  number;

  constructor(numbers) {
    this.validate(numbers);
    this.number = numbers;
  }

  validate(numbers) {
    this.validateNumberInRange(numbers);
    this.validateNotNumber(numbers);
  }

  validateNumberInRange(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < 1 || numbers[i] > 45) {
        throw new Error('[ERROR] 보너스 번호는 숫자 1 ~ 45 범위 내에서 입력하세요.');
      }
    }
  }

  validateNotNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (isNaN(...winNumber[i])) {
        throw new Error('[ERROR] 보너스 번호는 숫자만 입력해야 합니다.');
      }
    }
  }
}

module.exports = LottoBonus;
