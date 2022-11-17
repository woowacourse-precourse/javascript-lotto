class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validateNumber(number, type) {
    if (number < 1 || 45 < number) {
      throw new Error(`[ERROR] ${type}는 1 ~ 45 사이의 숫자입니다.`);
    }
  }

  validate(numbers) {
    const lottoNumberSet = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    numbers.forEach((number) => {
      this.validateNumber(number, "로또 번호");
    });

    if (lottoNumberSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  validateBonusNumber(bonusNumber) {
    this.validateNumber(bonusNumber, "보너스 번호");

    if (this.#numbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 이미 로또번호에 포함된 번호입니다.");
    }
  }

  calculateCount(pickedNumbers, bonusNumber) {
    return {
      matchedCount: pickedNumbers.filter((number) =>
        this.#numbers.includes(number)
      ).length,
      isBonusMatched: pickedNumbers.includes(bonusNumber),
    };
  }

  calculate(pickedNumbers, bonusNumber) {
    this.validateBonusNumber(bonusNumber);

    const { matchedCount, isBonusMatched } = this.calculateCount(
      pickedNumbers,
      bonusNumber
    );

    if (matchedCount === 6) {
      return 1;
    } else if (matchedCount == 5 && isBonusMatched) {
      return 2;
    } else if (matchedCount == 5) {
      return 3;
    } else if (matchedCount == 4) {
      return 4;
    } else if (matchedCount == 3) {
      return 5;
    }
    return 0;
  }
}

module.exports = Lotto;
