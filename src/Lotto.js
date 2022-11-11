class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sortNumbersInAscendingOrder(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw '[ERROR] 로또 번호는 6개여야 합니다.';
    }
    if (numbers.includes(NaN)) {
      throw '[ERROR] 문자, 특수기호를 제외한 1 ~ 45 사이의 숫자만 입력해야 합니다.';
    }
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw '[ERROR] 1 ~ 45 범위 이내의 숫자만 입력해야 합니다.';
    }
    if (numbers.length !== new Set(numbers).size) {
      throw '[ERROR] 서로 다른 숫자만 입력해야 합니다.';
    }
  }

  sortNumbersInAscendingOrder(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
