class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
    this.#printLottoNumbers();
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #printLottoNumbers() {
    console.log(this.#numbers);
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
