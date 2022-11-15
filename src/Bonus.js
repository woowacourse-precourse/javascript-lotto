class Bonus {
  #bonus;
  #numbers;

  constructor(numbers, bonus) {
    this.#numbers = numbers;
    this.validate(bonus);
    this.#bonus = bonus;
  }

  validate(bonus) {
    if (!(bonus >= 1 && bonus <= 45)) {
      throw new Error(
        "[ERROR] 보너스 번호는 1에서 45 사이의 숫자만 가능합니다."
      );
    }
    if (!Number.isInteger(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 정수만 가능합니다.");
    }

    if (this.#numbers.includes(bonus)) {
      throw new Error("[ERROR] 보너스 번호는 로또 번호와 중복될 수 없습니다.");
    }
  }

  getBonus() {
    return this.#bonus;
  }
}

module.exports = Bonus;
