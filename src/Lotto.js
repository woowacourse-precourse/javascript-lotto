Lotto

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.lottoNumberSort(numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  lottoNumberSort(numbers) {
    function compareNumbers(a, b) {
        return a - b
    }

    return numbers.sort(compareNumbers)
}
  // TODO: 추가 기능 구현
}

module.exports = Lotto;