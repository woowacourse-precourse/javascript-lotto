class Lotto {
  #numbers;

  constructor(numbers) {
    this.lottoLengthValidate(numbers);
    this.lottoOverlapNumValidate(numbers);
    this.#numbers = numbers;
  }

  lottoLengthValidate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  lottoOverlapNumValidate(numbers) {
    const set = new Set(numbers);
    if (set.size < numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복되는 숫자가 있습니다.");
    }
  }
}

module.exports = Lotto;
