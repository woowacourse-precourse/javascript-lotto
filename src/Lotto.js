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
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchCount(winNumbers) {
    const winNumberSet = new Set(winNumbers);
    const matchNumbers = this.#numbers.filter((number) => winNumberSet.has(number));

    return matchNumbers.length;
  }

  hasWinBonus(winBonus) {
    return this.#numbers.includes(winBonus);
  }
}

module.exports = Lotto;
