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
  }

  countMatchNumbers(winningNumber) {
    const matchNumbers = this.#numbers.filter((number) =>
      winningNumber.includes(number),
    );
    return matchNumbers.length;
  }
}

module.exports = Lotto;
