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

  calculateResult(userNumbers, userBonusNumber) {
    const numberSet = new Set(this.#numbers);

    const cnt = userNumbers.reduce((acc, currentNumber) => {
      if (numberSet.has(currentNumber)) {
        return (acc += 1);
      }
      return acc;
    }, 0);
  }
}

module.exports = Lotto;

const lotto = new Lotto([1, 3, 5, 14, 22, 45]);
lotto.calculateResult([1, 2, 3, 4, 5, 6], 7);
