class Lotto {
  #numbers;
  #bonus;
  /**
   * @param {Array{number}} numbers
   */
  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error("[ERROR] 중복된 값이 입력되면 안됩니다.");
    }
  }

  /**
   * @param {number} bonus 
   */
  setBonus(bonus) {
    this.#bonus = bonus;
  }

  getNumbers() {
    return [...this.#numbers];
  }

  getBonus() {
    return this.#bonus;
  }
}

module.exports = Lotto;
