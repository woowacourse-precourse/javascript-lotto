class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.length !== new Set(numbers).size) {
      throw new Error('[ERROR] 중복되지 않는 숫자여야 합니다.');
    }

    if (Math.min(...numbers) < 1 || Math.max(...numbers) > 45) {
      throw new Error('[ERROR] 1부터 45까지의 숫자여야 합니다.');
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
