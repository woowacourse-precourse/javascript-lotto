class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.rangeBoolean = false;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size < numbers.length) {
      throw "[ERROR] 서로다른 수를 입력하세요!";
    }
    this.validateRange(numbers);
    if (this.rangeBoolean) {
      throw "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.";
    }
  }

  validateRange(numbers) {
    numbers.map((number) => {
      if (number > 45 || number === 0) {
        this.rangeBoolean = true;
      }
    });
  }

  returnValue() {
    return this.#numbers;
  }
}

module.exports = Lotto;
