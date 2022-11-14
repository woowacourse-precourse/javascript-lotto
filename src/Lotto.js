class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.validateDuplication(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateDuplication(numbers) {
    const numberList = numbers;
    const setList = new Set(numberList);

    if (numberList.length !== setList.size) {
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    }

  }
}

module.exports = Lotto;


