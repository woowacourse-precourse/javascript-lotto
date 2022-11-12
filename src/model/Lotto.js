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
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    else if (numbers.length !== [...new Set(numbers)].length)
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    else if (numbers.some((number) => number <= 0 || number > 45))
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
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
