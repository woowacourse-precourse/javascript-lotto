class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate(numbers);
  }

  validate(numbers) {
    this.checkLength(numbers);
    this.checkDuplicate(numbers);
    this.checkRange(numbers);
  }

  checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
  }

  checkDuplicate(numbers) {
    if (new Set(numbers).size < 6) {
      throw new Error('[ERROR] 당첨 번호 중에서 중복된 번호가 있습니다.');
    }
  }

}

module.exports = Lotto;
