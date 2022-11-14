class Lotto {
  numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (this.isDuplicate(numbers) === true) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  isDuplicate(numbers) {
    const set = new Set(numbers);

    return numbers.length !== set.size;
  }
}

module.exports = Lotto;
