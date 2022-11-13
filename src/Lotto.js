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

  get numbers() {
    return this.#numbers;
  }

  print() {
    Console.print('[' + this.numbers.join(', ') + ']');
  }

  hasBonusNumber(bonusNumber) {
    return this.numbers.includes(bonusNumber);
  }

  countDuplicateNumber(winningNumber) {
    return this.numbers
      .filter(number => winningNumber.includes(number))
      .length;
  }
}

module.exports = Lotto;
