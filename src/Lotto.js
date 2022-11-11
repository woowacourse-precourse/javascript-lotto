class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.checkNumber(numbers);
    this.checkLength(numbers);
  }

  checkNumber(numbers) {
    const invalidList = numbers.filter((number) => {
      return Number.isNaN(number);
      // Error: 숫자+숫자아닌값 조합인 경우 예외 처리가 되지 않음.
    });
    if (invalidList.length > 0) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
  }

  checkLength(numbers) {
    const LOTTO_LENGTH = 6;
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

module.exports = Lotto;
