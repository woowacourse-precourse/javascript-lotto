class Bonus {
  constructor(bonus, numbers) {
    this.validate(bonus, numbers);
    this.number = bonus;
  }

  validate(bonus, numbers) {
    if (/[^0-9]/.test(bonus)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }

    if (!(bonus >= 1 && bonus <= 45)) {
      throw new Error('[ERROR] 보너스 번호는 1과 45 사이의 숫자여야 합니다.');
    }

    if (numbers.includes(bonus)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복되지 않습니다.');
    }
  }
}

module.exports = Bonus;
