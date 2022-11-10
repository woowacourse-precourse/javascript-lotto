class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate();
  }

  validate() {
    this.isNumberSix();
    this.isNumber();
    this.isUniqueNumber();
    this.isNumberInRange();
  }

  isNumberSix() {
    if (this.#numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  isNumber() {
    this.#numbers.map((item) => {
      if (Number.isNaN(parseInt(item, 10))) {
        throw new Error('[ERROR] 숫자를 입력하세요.');
      }
    });
  }

  isUniqueNumber() {
    const check = new Set(this.#numbers);
    if (check.size !== this.#numbers.length) {
      throw new Error('[ERROR] 서로 다른 숫자를 입력하세요.');
    }
  }

  isNumberInRange() {
    this.#numbers.map((item) => {
      if (!(1 <= item && item <= 45)) {
        throw new Error('[ERROR] 1~45 사이의 숫자를 입력하세요.');
      }
    });
  }
}

module.exports = Lotto;
