class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getNumberOfMatch(winningNumbers) {
    const matches = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    );
    return matches.length;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
