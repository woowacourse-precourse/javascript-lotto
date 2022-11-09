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

  rank(winNumbers, bonusNumber) {
    let count = 0;
    winNumbers.forEach((winNumber) => {
      count += this.#numbers.includes(winNumber);
    });

    if (count === 6) return 1;
    if (count === 5 && this.#numbers.includes(bonusNumber)) return 2;
    if (count >= 3) return 8 - count;
    return 0;
  }
}

module.exports = Lotto;
