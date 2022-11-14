class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.lottoAscendingOrder(numbers);
  }

  validate(numbers) {
    const testType = /[0-9]/;
    if (numbers.length !== 6) throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    if (numbers.length !== new Set(numbers).size) throw new Error('[ERROR] 중복되는 숫자가 있습니다.');
    numbers.forEach((number) => {
      if (number < 1 || number > 45) throw new Error('[ERROR] 1~45 사이 숫자여야 합니다.');
      if (!testType.test(numbers)) throw new Error('[ERROR] 숫자여야 합니다.');
    });
    return numbers;
  }

  lottoAscendingOrder(numbers) {
    return numbers.sort((a, b) => a - b);
  }
  getSortLotto() {
    return this.#numbers;
  }
}

module.exports = Lotto;
